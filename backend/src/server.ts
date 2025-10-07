import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { config } from './config';
import { errorMiddleware } from './middleware/error';
import { notFoundMiddleware } from './middleware/notFound';
import apiRoutes from './routes';

dotenv.config();

const app: Application = express();

app.use(helmet());
app.use(cors(config.api.cors));
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api', apiRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

const server = app.listen(config.api.port, () => {
  console.log(`Server running on port ${config.api.port} in ${process.env.NODE_ENV} mode`);
});

export default server;
