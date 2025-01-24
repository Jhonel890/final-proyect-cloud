const router = require('express').Router();

const CuentaControl = require('../app/controls/CuentaControl');

const cuentaControl = new CuentaControl();

router.get('/', cuentaControl.listar);


//metodoss y demas

module.exports = router;