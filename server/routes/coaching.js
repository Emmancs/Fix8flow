import express from 'express';
import { getCoaching } from '../controllers/coachingController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/:habitId/:type', getCoaching);

export default router;

