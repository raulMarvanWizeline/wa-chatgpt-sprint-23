import React from 'react';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
      <p className="mt-4 text-lg">{text}</p>
    </div>
  );
};

export default Loader;
