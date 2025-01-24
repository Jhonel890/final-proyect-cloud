var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const routerCuenta = require('./routes/cuenta');
const routerPersona = require('./routes/persona');
const routerRol = require('./routes/rol');

var app = express();
app.use(cors({ origin: '*' })); 


app.use('/cuenta', routerCuenta);
app.use('/persona', routerPersona);
app.use('/rol', routerRol);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


console.log("Ruta de modelos:", path.resolve(__dirname, 'app', 'models'));
let models = require('./app/models');
models.sequelize.sync({ force:false, logging: false }).then(() => { //drop
  console.log("Se ha sincronizado la base de datos");
}).catch(err => {
  console.log(err, 'Hubo un error al sincronizar la base de datos');
});

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;