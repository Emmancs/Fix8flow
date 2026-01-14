import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { HabitCard } from './HabitCard';
import { AddHabitModal } from './AddHabitModal';
import { Button } from '../Common/Button';

export const HabitList = ({ habits, onCreate, onDelete, onToggle }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-200 tracking-wide uppercase">Your habits</h2>
        <Button onClick={() => setOpen(true)} className="px-3 py-1 text-xs">
          <Plus className="h-4 w-4" />
          Add habit
        </Button>
      </div>

      {habits.length === 0 ? (
        <p className="text-sm text-slate-400 border border-dashed border-slate-800 rounded-xl p-4">
          No habits yet. Start small: add one habit you can finish in under 2 minutes.
        </p>
      ) : (
        <div className="grid gap-3">
          {habits.map((habit) => (
            <HabitCard key={habit._id} habit={habit} onDelete={onDelete} onToggle={onToggle} />
          ))}
        </div>
      )}

      <AddHabitModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={async (data) => {
          await onCreate(data);
          setOpen(false);
        }}
      />
    </section>
  );
};

