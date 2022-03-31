const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('./getDogs')
const postDog = require('./postDog')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getDogs)
router.use('/dogs', getDogs) //Funciona
router.post('/dog', postDog) //Funciona (Me escribe en DB)


module.exports = router;
