const express = require('express');
const taskController = require('../controllers/taskController');
const validation = require('../middlewares/validation');
const router = express.Router();

router.post('/tasks', validation.validateTask, taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', validation.validateTask, taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
