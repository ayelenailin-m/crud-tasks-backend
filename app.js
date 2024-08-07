const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(taskRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});