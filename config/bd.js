const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    database: 'tasks_db'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

module.exports = db;
