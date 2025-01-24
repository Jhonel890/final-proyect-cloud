const router = require('express').Router();

const PersonaControl = require('../app/controls/PersonaControl');

const personaControl = new PersonaControl();

router.get('/', personaControl.listar);


module.exports = router;
//metodoss y demas