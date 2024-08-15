import express, { json } from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(json());

// Rutas de tareas
app.use(taskRoutes);

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error('Error inesperado:', err);
    res.status(500).json({ error: 'Error inesperado en el servidor' });
});

// Inicializar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
