import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Sistema de Crédito ABC</h1>
      <p className="mt-4 text-gray-700">
        Welcome — this is the frontend foundation for the credit management system (CP & CDC). Use
        the domain folders to add features: Cadastro de Clientes, Análise de Crédito, Simulação,
        Contratação, Gestão de Parcelas, Renegociação and Dashboard.
      </p>
      <section className="mt-8 p-4 bg-gray-50 rounded">
        <h2 className="text-lg font-semibold">Getting started</h2>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>
            Run: <code>npm install</code> then <code>npm run dev</code>
          </li>
          <li>
            API base: <code>VITE_API_URL</code> from .env
          </li>
          <li>Pages, domains and core utilities follow the recommended structure under src/</li>
        </ul>
      </section>
    </div>
  );
};

export const NotFound: React.FC = () => (
  <div className="p-8">
    <h2 className="text-2xl font-semibold">Page not found</h2>
    <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
  </div>
);

export default HomePage;
