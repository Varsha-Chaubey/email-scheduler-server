import { Router } from 'express';
import { allSchedules, createScheduler,deleteSchedules,searchSchedules,updateScheduler } from '../controllers/schedulerController';
const router = Router();

router.post('/create', createScheduler);
router.put('/update/:id', updateScheduler);
router.get('/get', allSchedules);
router.get('/search', searchSchedules);
router.delete('/delete/:id', deleteSchedules);

export default router