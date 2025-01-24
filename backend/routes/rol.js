const router = require('express').Router();

const RolControl = require('../app/controls/RolControl');

const rolControl = new RolControl();

router.get('/', rolControl.listar);


//metodoss y demas

module.exports = router;