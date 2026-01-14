import React from 'react';

export const Loading = () => {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
      <span className="text-sm font-medium">Loading...</span>
    </div>
  );
};

