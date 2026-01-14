import React from 'react';

export const Stats = ({ habits }) => {
  const total = habits.length;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const completionsToday = habits.reduce((sum, h) => {
    const dates = h.dates || [];
    const doneToday = dates.some((d) => new Date(d).getTime() === today.getTime());
    return sum + (doneToday ? 1 : 0);
  }, 0);

  const totalCompletions = habits.reduce((sum, h) => sum + (h.total || 0), 0);

  return (
    <section className="grid grid-cols-3 gap-3 mb-5">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
        <p className="text-[11px] text-slate-400">Habits</p>
        <p className="mt-1 text-xl font-semibold text-white">{total}</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
        <p className="text-[11px] text-slate-400">Done today</p>
        <p className="mt-1 text-xl font-semibold text-emerald-400">{completionsToday}</p>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
        <p className="text-[11px] text-slate-400">All-time</p>
        <p className="mt-1 text-xl font-semibold text-purple-300">{totalCompletions}</p>
      </div>
    </section>
  );
};

