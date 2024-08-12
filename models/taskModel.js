import { db } from '../config/bd.js';


  const createTasks = (title, description, isComplete, callback) => {
    try {
      const sql = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
      db.query(sql, [title, description, isComplete], callback);
    } catch (error) {
      console.log("")
    }
    
  }

  const getAll = callback => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, callback);
  }

  const getById = (id, callback) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  }

  const updateTasks = (id, title, description, isComplete, callback) => {
    const sql = 'UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?';
    db.query(sql, [title, description, isComplete, id], callback);
  }

  const deleteTasks =  (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  }


export { createTasks, getAll, getById, updateTasks, deleteTasks };
