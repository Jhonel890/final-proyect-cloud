const router = require('express').Router();

const InquietudControl = require('../app/controls/InquietudControl');

const inquietudControl = new InquietudControl();

router.get('/', inquietudControl.listar);
router.get('/:external', inquietudControl.obtener);
router.post('/', inquietudControl.guardar);
router.put('/:external', inquietudControl.modificar);


module.exports = router;
