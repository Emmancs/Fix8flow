import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    why: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      enum: ['health', 'productivity', 'mindfulness', 'learning', 'social'],
      default: 'health'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Habit', habitSchema);

