import React from 'react';

export const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className={className}>
      {label && <label className="block text-sm font-medium text-gray-200 mb-1">{label}</label>}
      <input
        className={`w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
};

