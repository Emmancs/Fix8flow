import React from 'react';
import { Trash2 } from 'lucide-react';
import { WeekView } from './WeekView';

export const HabitCard = ({ habit, onDelete, onToggle }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-purple-500/70 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{habit.name}</p>
          {habit.why && <p className="mt-1 text-xs text-slate-400">{habit.why}</p>}
          <p className="mt-2 text-[11px] uppercase tracking-wide text-slate-500">
            {habit.category} • {habit.total || 0} done
          </p>
        </div>
        <button
          onClick={() => onDelete(habit._id)}
          className="rounded-full p-1 text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      <WeekView habit={habit} onToggle={onToggle} />
    </div>
  );
};

