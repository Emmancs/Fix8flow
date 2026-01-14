import Habit from '../models/Habit.js';
import HabitLog from '../models/HabitLog.js';
import { getAICoaching } from '../services/aiService.js';

const calculateStreak = (logs) => {
  if (!logs.length) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedLogs = logs
    .map((log) => new Date(log.completedDate))
    .sort((a, b) => b - a);

  if (sortedLogs[0].getTime() !== today.getTime()) return 0;

  let streak = 1;
  let current = new Date(today);

  for (let i = 1; i < sortedLogs.length; i++) {
    current.setDate(current.getDate() - 1);
    if (sortedLogs[i].getTime() === current.getTime()) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

export const getCoaching = async (req, res) => {
  try {
    const { habitId, type } = req.params;

    const habit = await Habit.findOne({ _id: habitId, userId: req.userId });
    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    const logs = await HabitLog.find({ habitId, userId: req.userId });
    const streak = calculateStreak(logs);

    const habitData = {
      name: habit.name,
      why: habit.why || 'self-improvement',
      streak,
      totalCompletions: logs.length
    };

    const coaching = await getAICoaching(type, habitData);

    res.json({ coaching, type });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

