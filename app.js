const express = require('express');

const app = express();
app.use(express.json());


const { newconnection } = require("./config/bd")
app.get("/", async (request, response) => {
    const connection = await newconnection()
    const results = await connection.query("SELECT * from tasks")
    response.json(results[0])
    connection.end()
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});