import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';
import LoadingSpinner from '@/core/components/LoadingSpinner';

const RootLayout = lazy(() =>
  import('@/pages/layouts/RootLayout/main').then((m) => ({ default: m.RootLayout }))
);
const HomePage = lazy(() => import('@/pages/Home/main').then((m) => ({ default: m.HomePage })));
const NotFound = lazy(() => import('@/pages/Home/main').then((m) => ({ default: m.NotFound })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
