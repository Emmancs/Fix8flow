import React, { useState } from 'react';
import { Button } from '../Common/Button';
import { Input } from '../Common/Input';
import { validateHabit } from '../../utils/validators';

export const AddHabitModal = ({ open, onClose, onCreate }) => {
  const [form, setForm] = useState({ name: '', why: '', category: 'health' });
  const [error, setError] = useState('');

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateHabit(form);
    if (validation) {
      setError(validation);
      return;
    }
    await onCreate(form);
    setForm({ name: '', why: '', category: 'health' });
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-2xl">
        <h2 className="text-lg font-semibold text-white mb-4">Create new habit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Habit name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Drink water, read 10 pages..."
            error={error}
          />
          <Input
            label="Why does this matter?"
            name="why"
            value={form.why}
            onChange={handleChange}
            placeholder="Because..."
          />
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="health">Health</option>
              <option value="productivity">Productivity</option>
              <option value="mindfulness">Mindfulness</option>
              <option value="learning">Learning</option>
              <option value="social">Social</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>
            <Button type="submit">Create habit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

