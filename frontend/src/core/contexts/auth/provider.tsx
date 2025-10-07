import React, { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './context';
import type { User } from './types';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          // Optionally validate token with backend
          // For scaffold: treat token existence as authenticated
          setIsAuthenticated(true);
          setUser({ id: 'me', name: 'Usuário', email: 'user@example.com' });
        }
      } catch (e) {
        localStorage.removeItem('auth_token');
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: call auth service; here we mock
    setIsLoading(true);
    try {
      localStorage.setItem('auth_token', 'mock-token');
      setUser({ id: 'me', name: 'Usuário', email });
      setIsAuthenticated(true);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
