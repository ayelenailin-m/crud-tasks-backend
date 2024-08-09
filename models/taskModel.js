import { query } from '../config/bd';

const Task = {
  create: (title, description, isComplete, callback) => {
    const sql = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
    query(sql, [title, description, isComplete], callback);
  },

  getAll: callback => {
    const sql = 'SELECT * FROM tasks';
    query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    query(sql, [id], callback);
  },

  update: (id, title, description, isComplete, callback) => {
    const sql = 'UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?';
    query(sql, [title, description, isComplete, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    query(sql, [id], callback);
  }
};

export default Task;
