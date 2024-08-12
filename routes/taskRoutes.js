import { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';
import { validateTask } from '../middlewares/validation.js';
import { controladorErrores } from '../validations/apply.validation.js';

const router = Router();

router.post('/tasks', validateTask, controladorErrores, createTask);
router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.put('/task/:id', validateTask, controladorErrores, updateTask);
router.delete('/task/:id', deleteTask);

export default router;
