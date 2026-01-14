import api from './api';

export const coachingService = {
  async getCoaching(habitId, type) {
    const response = await api.get(`/coaching/${habitId}/${type}`);
    return response.data;
  }
};

