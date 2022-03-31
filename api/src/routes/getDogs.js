const getDogsApi = require('./utils/getDogsApi.js') //me traigo la funcion que saca datos de la API
const getDogsDb = require('./utils/getDogsDb.js') //me traigo la funcion que saca datos de la API

module.exports = async function(req, res) {
    const {name} = req.query;

    if(name) {

        const infoApi = await getDogsApi(name);
        const infoDb = await getDogsDb(name);
        const totalDogs = infoApi.concat(infoDb)
        totalDogs.length === 0 ? res.status(404).json({error: 'No se encontraron razas para esta búsqueda.'}) : res.status(200).json(totalDogs)
        

    } else {
        const infoApi = await getDogsApi();
        const infoDb = await getDogsDb();
        const totalDogs = infoApi.concat(infoDb)
        res.status(200).json(totalDogs)
        
    }


}