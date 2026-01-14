import Habit from '../models/Habit.js';
import HabitLog from '../models/HabitLog.js';

export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.userId }).sort({ createdAt: -1 });

    // Get logs for all habits
    const habitIds = habits.map((h) => h._id);
    const logs = await HabitLog.find({ habitId: { $in: habitIds } });

    // Map logs to habits
    const habitsWithLogs = habits.map((habit) => {
      const habitLogs = logs.filter((log) => log.habitId.toString() === habit._id.toString());
      return {
        ...habit.toObject(),
        dates: habitLogs.map((log) => log.completedDate),
        total: habitLogs.length
      };
    });

    res.json({ habits: habitsWithLogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createHabit = async (req, res) => {
  try {
    const { name, why, category } = req.body;

    const habit = await Habit.create({
      userId: req.userId,
      name,
      why,
      category
    });

    res.status(201).json({
      habit: {
        ...habit.toObject(),
        dates: [],
        total: 0
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    // Delete all logs for this habit
    await HabitLog.deleteMany({ habitId: req.params.id });

    res.json({ message: 'Habit deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const toggleHabit = async (req, res) => {
  try {
    const { habitId, date } = req.body;
    const completedDate = new Date(date);
    completedDate.setHours(0, 0, 0, 0);

    // Check if log exists
    const existingLog = await HabitLog.findOne({
      habitId,
      userId: req.userId,
      completedDate
    });

    if (existingLog) {
      // Remove log
      await HabitLog.deleteOne({ _id: existingLog._id });
      res.json({ message: 'Habit unmarked', completed: false });
    } else {
      // Add log
      await HabitLog.create({
        habitId,
        userId: req.userId,
        completedDate
      });
      res.json({ message: 'Habit completed', completed: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

