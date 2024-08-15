import { createConnection } from 'mysql2';

let db;

try {
    db = createConnection({
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
} catch (error) {
    console.error('Error al intentar crear la conexión a la base de datos:', error);
}

export { db };
