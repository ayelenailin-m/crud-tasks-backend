import { db } from '../config/bd.js';

const createTasks = (title, description, isComplete, callback) => {
  try {
    const sql = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
    db.query(sql, [title, description, isComplete], callback);
  } catch (error) {
    console.error('Error al crear una tarea:', error);
    callback(error); // Devolver el error al callback para manejarlo en la capa superior
  }
};

const getAll = (callback) => {
  try {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, callback);
  } catch (error) {
    console.error('Error al obtener todas las tareas:', error);
    callback(error);
  }
};

const getById = (id, callback) => {
  try {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  } catch (error) {
    console.error(`Error al obtener la tarea con id ${id}:`, error);
    callback(error);
  }
};

const updateTasks = (id, title, description, isComplete, callback) => {
  try {
    const sql = 'UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?';
    db.query(sql, [title, description, isComplete, id], callback);
  } catch (error) {
    console.error(`Error al actualizar la tarea con id ${id}:`, error);
    callback(error);
  }
};

const deleteTasks = (id, callback) => {
  try {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  } catch (error) {
    console.error(`Error al eliminar la tarea con id ${id}:`, error);
    callback(error);
  }
};

export { createTasks, getAll, getById, updateTasks, deleteTasks };
