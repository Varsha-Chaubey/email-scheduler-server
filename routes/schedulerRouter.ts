import { Router } from 'express';
import { allSchedules, createScheduler,deleteSchedules,searchSchedules,updateScheduler } from '../controllers/schedulerController';
const router = Router();

router.post('/createSchedules', createScheduler);
router.put('/updateSchedules/:id', updateScheduler);
router.get('/getSchedules', allSchedules);
router.get('/searchSchedules', searchSchedules);
router.delete('/deleteSchedules/:id', deleteSchedules);

export default router