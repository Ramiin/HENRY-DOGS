const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('./getDogs');
const postDog = require('./postDog');
const getTemperaments = require('./getTemperaments')


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs); //Busca todos, por query y por params
router.get('/dog/:breedId', getDogs); // Obtengo raza por ID
router.post('/dog', postDog); // Escribe en DB
router.get('/temperament', getTemperaments); // (Busca en DB)




// router.get('/testing', saveTemperamentsFromApi) //Working


module.exports = router;
