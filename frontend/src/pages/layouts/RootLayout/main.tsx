import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '@/core/contexts/auth/useAuth';

export const RootLayout: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Sistema de Crédito ABC
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-sm text-gray-700">
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">Olá, {user?.name}</span>
                <button onClick={() => logout()} className="text-sm text-red-600">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth/login" className="text-sm text-blue-600">
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Sistema de Crédito ABC
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
