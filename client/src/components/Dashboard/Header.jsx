import React from 'react';
import { Brain } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Habit Coach</p>
          <p className="text-sm text-slate-300">
            Welcome back, <span className="font-semibold text-white">{user?.name}</span>
          </p>
        </div>
      </div>
      <button
        onClick={logout}
        className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-800"
      >
        Logout
      </button>
    </header>
  );
};

