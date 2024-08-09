import { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';
import { validateTask } from '../middlewares/validation.js';
const router = Router();

router.post('/tasks', validateTask, createTask);
router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.put('/task/:id', validateTask, updateTask);
router.delete('/task/:id', deleteTask);

export default router;
