import React from 'react';
import { getWeekDates, isSameDay } from '../../utils/dateUtils';

export const WeekView = ({ habit, onToggle }) => {
  const week = getWeekDates();
  const dates = (habit.dates || []).map((d) => new Date(d));

  const isCompleted = (day) => dates.some((d) => isSameDay(d, day));

  return (
    <div className="flex gap-1 mt-3">
      {week.map((day) => {
        const completed = isCompleted(day);
        return (
          <button
            key={day.toISOString()}
            onClick={() => onToggle(habit._id, day)}
            className={`h-7 w-7 rounded-full text-[10px] flex items-center justify-center border ${
              completed
                ? 'bg-emerald-500/90 border-emerald-400 text-white'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-purple-500'
            }`}
            title={day.toDateString()}
          >
            {'SMTWTFS'[day.getDay()]}
          </button>
        );
      })}
    </div>
  );
};

