const Task = require('../models/taskModel');

exports.createTask = (req, res) => {
    const { title, description, isComplete } = req.body;
    Task.create(title, description, isComplete, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al crear la tarea' });
        }
        res.status(201).json({ message: 'Tarea creada', id: result.insertId });
    });
};

exports.getAllTasks = (req, res) => {
    Task.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las tareas' });
        }
        res.status(200).json(results);
    });
};

exports.getTaskById = (req, res) => {
    const { id } = req.params;
    Task.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener la tarea' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(results[0]);
    });
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    Task.update(id, title, description, isComplete, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar la tarea' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea actualizada' });
    });
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    Task.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar la tarea' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada' });
    });
};
