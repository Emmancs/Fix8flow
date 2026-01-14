import express from 'express';
import { getHabits, createHabit, deleteHabit, toggleHabit } from '../controllers/habitController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/', getHabits);
router.post('/', createHabit);
router.delete('/:id', deleteHabit);
router.post('/toggle', toggleHabit);

export default router;

