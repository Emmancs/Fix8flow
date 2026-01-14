import { useEffect, useState } from 'react';
import { habitService } from '../services/habitService';

export const useHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadHabits = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await habitService.getHabits();
      setHabits(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load habits');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHabits();
  }, []);

  const addHabit = async (habit) => {
    const created = await habitService.createHabit(habit);
    setHabits((prev) => [created, ...prev]);
  };

  const removeHabit = async (habitId) => {
    await habitService.deleteHabit(habitId);
    setHabits((prev) => prev.filter((h) => h._id !== habitId));
  };

  const toggleHabit = async (habitId, date) => {
    const result = await habitService.toggleHabit(habitId, date);
    if (result.completed) {
      setHabits((prev) =>
        prev.map((h) =>
          h._id === habitId
            ? {
                ...h,
                dates: [...(h.dates || []), new Date(date)],
                total: (h.total || 0) + 1
              }
            : h
        )
      );
    } else {
      setHabits((prev) =>
        prev.map((h) =>
          h._id === habitId
            ? {
                ...h,
                dates: (h.dates || []).filter(
                  (d) => new Date(d).toDateString() !== new Date(date).toDateString()
                ),
                total: Math.max(0, (h.total || 1) - 1)
              }
            : h
        )
      );
    }
  };

  return { habits, loading, error, addHabit, removeHabit, toggleHabit, reload: loadHabits };
};

