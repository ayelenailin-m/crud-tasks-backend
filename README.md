# Tareas CRUD API

Esta es una API backend para gestionar tareas utilizando Node.js, Express y MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de tareas.

## Requisitos

- Node.js
- MySQL

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu_usuario/tareas-crud-api.git
   cd tareas-crud-api

2. Instala las dependencias: 

   npm install


3. Configura la base de datos:

   Accede a MySQL y crea la base de datos 'tasks_db' y la tabla 'tasks':
      CREATE DATABASE tasks_db;
      USE tasks_db;

         CREATE TABLE tasks (
           id INT AUTO_INCREMENT PRIMARY KEY,
           title VARCHAR(255) NOT NULL,
           description TEXT NOT NULL,
           isComplete BOOLEAN NOT NULL
        );

## Uso

1. Inica el servidor:

   npm run dev

   El servidor estará escuchando en http://localhost:3000.

2. Usa las rutas para interactuar con la API:

  - POST/tasks: Añadir una nueva tarea:
     url http://localhost:3000/tasks'

     Ejemplo de cuerpo de solicitud:

       {
        "title": "Mi Tarea", 
        "description": "Descripción de mi tarea",
        "isComplete": false
       }

  - GET /tasks: Obtener todas las tareas:
     url http://localhost:3000/tasks

  - GET /task/: Obtener una tarea específica por su ID:
     url http://localhost:3000/task/1

  - PUT /task/: Actualizar una tarea específica por su ID:
     url http://localhost:3000/task/1

     Ejemplo de cuerpo de solicitud:

       {
        "title": "Mi Tarea Actualizada",
         "description": "Descripción actualizada de mi tarea", 
         "isComplete": true
       }

  - DELETE /task/: Eliminar una tarea específica por su ID:
     url http://localhost:3000/task/1
