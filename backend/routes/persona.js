const router = require('express').Router();

const PersonaControl = require('../app/controls/PersonaControl');

const personaControl = new PersonaControl();

router.get('/', personaControl.listar);
router.get('/:external', personaControl.obtener);
router.post('/', personaControl.guardar);
router.put('/:external', personaControl.modificar);


module.exports = router;
//metodoss y demas