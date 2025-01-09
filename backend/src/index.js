// src/index.js
const express = require('express');
const { sequelize, persona } = require('../db');  // Asegúrate de que 'persona' esté importado desde tu modelo
const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola, servidor está funcionando!');
});

// Obtener todos los usuarios
app.get('/users', async (_, res) => {
  try {
    const [users, metadata] = await sequelize.query('SELECT * FROM cuenta');
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Crear una persona
app.post('/users', async (req, res) => {
  const { nombres, apellidos, direccion, cedula } = req.body;

  // Validación de campos requeridos
  if (!nombres || !apellidos || !direccion || !cedula) {
    return res.status(400).json({ error: 'Faltan datos necesarios' });
  }

  try {
    // Iniciar una transacción
    const transaction = await sequelize.transaction();

    // Realizar la inserción de persona de manera segura
    const newPersona = await persona.create(
      {
        nombres,
        apellidos,
        direccion,
        cedula
      },
      { transaction }
    );

    // Confirmar la transacción
    await transaction.commit();

    // Retornar la respuesta con los datos de la persona creada
    res.status(201).json({
      message: 'Persona creada exitosamente',
      persona: newPersona
    });

  } catch (error) {
    // En caso de error, revertir la transacción
    await transaction.rollback();
    console.error('Error al crear la persona:', error);
    res.status(500).json({ error: 'Error al crear la persona' });
  }
});

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
