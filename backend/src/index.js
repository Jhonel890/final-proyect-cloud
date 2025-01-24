// src/index.js
const express = require('express');
const { sequelize, persona } = require('../db');  // Asegúrate de que 'persona' esté importado desde tu modelo
const app = express();
const PORT = 3000;

const personaRouter = require('../routes/persona');
const cuentaRouter = require('../routes/cuenta');
const rolRouter = require('../routes/rol');

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

app.use('/persona', personaRouter);
app.use('/cuenta', cuentaRouter);
app.use('/rol', rolRouter);
// Rutas



// Conexión a la base de datos y arranque del servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa!');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });
