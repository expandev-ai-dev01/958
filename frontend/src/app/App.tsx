import React from 'react';
import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * Root application component
 * Sets up global providers and routing
 */
const App: React.FC = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};

export default App;
