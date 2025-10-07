import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/contexts/auth/useAuth';
import LoadingSpinner from '@/core/components/LoadingSpinner/main';

export const ProtectedRoute: React.FC<{
  children: React.ReactElement;
  requiredPermissions?: string[];
}> = ({ children, requiredPermissions = [] }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate to="/auth/login" state={{ from: location }} replace />;

  if (requiredPermissions.length > 0) {
    const hasPermission = requiredPermissions.every((p) => user?.permissions?.includes(p));
    if (!hasPermission) return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
