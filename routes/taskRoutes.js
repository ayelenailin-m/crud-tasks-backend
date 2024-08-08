const express = require('express');
const taskController = require('../controllers/taskController');
const validation = require('../middlewares/validation');
const router = express.Router();

router.post('/tasks', validation.validateTask, taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/task/:id', taskController.getTaskById);
router.put('/task/:id', validation.validateTask, taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

module.exports = router;
