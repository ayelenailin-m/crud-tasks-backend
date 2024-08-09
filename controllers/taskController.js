import { createTasks, getAll, getById, updateTasks, deleteTasks } from '../models/taskModel.js';

export function createTask(req, res) {
    const { title, description, isComplete } = req.body;
    createTasks(title, description, isComplete, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al crear la tarea' });
        }
        res.status(201).json({ message: 'Tarea creada', id: result.insertId });
    });
}

export function getAllTasks(req, res) {
    getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las tareas' });
        }
        res.status(200).json(results);
    });
}

export function getTaskById(req, res) {
    const { id } = req.params;
    getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener la tarea' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json(results[0]);
    });
}

export function updateTask(req, res) {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    updateTasks(id, title, description, isComplete, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar la tarea' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea actualizada' });
    });
}

export function deleteTask(req, res) {
    const { id } = req.params;
    deleteTasks(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar la tarea' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada' });
    });
}
