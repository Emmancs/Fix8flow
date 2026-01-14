import api from './api';

export const habitService = {
  async getHabits() {
    const response = await api.get('/habits');
    return response.data.habits;
  },

  async createHabit(habitData) {
    const response = await api.post('/habits', habitData);
    return response.data.habit;
  },

  async deleteHabit(habitId) {
    await api.delete(`/habits/${habitId}`);
  },

  async toggleHabit(habitId, date) {
    const response = await api.post('/habits/toggle', { habitId, date });
    return response.data;
  }
};

