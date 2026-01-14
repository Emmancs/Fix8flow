export const validateHabit = ({ name }) => {
  if (!name || !name.trim()) {
    return 'Habit name is required';
  }
  if (name.length > 80) {
    return 'Habit name is too long';
  }
  return '';
};

