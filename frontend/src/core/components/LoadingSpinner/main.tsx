import React from 'react';

const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dim = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-10 h-10' : 'w-6 h-6';
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${dim} border-blue-600`}
      />
    </div>
  );
};

export default LoadingSpinner;
