import express, { json } from 'express';
import taskRoutes from './routes/taskRoutes.js';
const app = express();

app.use(json());
app.use(taskRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
