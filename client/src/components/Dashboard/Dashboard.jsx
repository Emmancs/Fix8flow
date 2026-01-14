import React, { useMemo, useState } from 'react';
import { Header } from './Header';
import { Stats } from './Stats';
import { HabitList } from '../Habits/HabitList';
import { CoachingPanel } from '../Coaching/CoachingPanel';
import { useHabits } from '../../hooks/useHabits';
import { Loading } from '../Common/Loading';

export const Dashboard = () => {
  const { habits, loading, error, addHabit, removeHabit, toggleHabit } = useHabits();
  const [selectedId, setSelectedId] = useState(null);

  const selectedHabit = useMemo(
    () => habits.find((h) => h._id === selectedId) || habits[0],
    [habits, selectedId]
  );

  if (loading && habits.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <Header />
        {error && (
          <p className="mb-3 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-200">
            {error}
          </p>
        )}
        <Stats habits={habits} />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          <div
            onClick={(e) => {
              const card = e.target.closest('[data-habit-id]');
              if (card) setSelectedId(card.getAttribute('data-habit-id'));
            }}
          >
            <HabitList
              habits={habits}
              onCreate={addHabit}
              onDelete={removeHabit}
              onToggle={toggleHabit}
            />
          </div>
          <CoachingPanel selectedHabit={selectedHabit} />
        </div>
      </div>
    </div>
  );
};

