const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('./getDogs');
const postDog = require('./postDog');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get('/', getDogs)
router.get('/dogs', getDogs) //Busca todos, por query y por params
router.post('/dog', postDog) //Funciona (Me escribe en DB)
router.get('/dog/:breedId', getDogs) //Working


module.exports = router;
