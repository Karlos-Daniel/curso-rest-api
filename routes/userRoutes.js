const{ Router }= require('express');
const { usuariosGet, usuariosPost } = require('../controllers/userController');
const router = Router();

router.get('/apiget',usuariosGet);
router.post('/apipost',usuariosPost);


module.exports = router;