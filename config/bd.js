import { createConnection } from 'mysql2';

const db = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tasks_db'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

export { db };
