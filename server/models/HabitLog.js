import mongoose from 'mongoose';

const habitLogSchema = new mongoose.Schema(
  {
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Habit',
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    completedDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Compound index to prevent duplicate logs
habitLogSchema.index({ habitId: 1, completedDate: 1 }, { unique: true });

export default mongoose.model('HabitLog', habitLogSchema);

