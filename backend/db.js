// db.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, 'app', 'config', 'config.json'))[env]; // Cargar configuración desde config.json
const db = {};

// Conexión explícita a la base de datos con Sequelize
const sequelize = new Sequelize('tiempo', 'jhone', 'Sanduche333!', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    charset: 'utf8'
});

// Prueba de conexión
sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida correctamente.');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

// Leer los archivos de los modelos y cargarlos
fs.readdirSync(path.join(__dirname, 'app', 'models'))
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && 
      file !== basename && 
      file.slice(-3) === '.js' // Filtrar solo archivos .js
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, 'app', 'models', file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Asociar los modelos si es necesario
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch(err => {
    console.error('Error al sincronizar los modelos con la base de datos:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; // Exportar los modelos y la instancia de Sequelize
