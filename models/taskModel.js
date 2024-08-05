const db = require('../config/db');

const Task = {
  create: (title, description, isComplete, callback) => {
    const sql = 'INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)';
    db.query(sql, [title, description, isComplete], callback);
  },

  getAll: callback => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  },

  update: (id, title, description, isComplete, callback) => {
    const sql = 'UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?';
    db.query(sql, [title, description, isComplete, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Task;
