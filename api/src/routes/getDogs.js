const getDogsApi = require('./utils/getDogsApi.js') //me traigo la funcion que saca datos de la API
const getDogsDb = require('./utils/getDogsDb.js') //me traigo la funcion que saca datos de la API

module.exports = async function(req, res) {
    const {name} = req.query;
    const {breedId} = req.params;

    if(breedId){ // ID desde params
        const infoApi = await getDogsApi();
        const infoDb = await getDogsDb();
        const totalDogs = infoApi.concat(infoDb)
        const dataFound = totalDogs.filter(el => el.id == breedId);
        dataFound.length === 0 ? res.status(404).json([{error: 'No se encontraron razas con este ID'}]) : res.status(200).json(dataFound)

    }

    else if(name) { //Name desde query

        const infoApi = await getDogsApi(name);
        const infoDb = await getDogsDb(name);

        //Mapeamos temps para que sean igual a la API
        infoDb.forEach(el=>{

            if(el.temperaments){
            }
            el.dataValues.temperament = el.dataValues.temperaments.map(el => el.dataValues.name).join(', ')
        });

        const totalDogs = infoApi.concat(infoDb)
        totalDogs.length === 0 ? res.status(404).json([{error: 'No se encontraron razas para esta búsqueda.'}]) : res.status(200).json(totalDogs)
        
        

    } else { //Consulta todos los dogs DB & API
        const infoApi = await getDogsApi();
        const infoDb = await getDogsDb();
        
        //Mapeamos temps para que sean igual a la API
        infoDb.forEach(el=>{

            if(el.temperaments){
            }
            el.dataValues.temperament = el.dataValues.temperaments.map(el => el.dataValues.name).join(', ')
        });


        // console.log(infoDbMapped[0].dataValues.temperaments.map(el => el.dataValues.name)) -> Para acceder a los temperaments
    

        const totalDogs = infoApi.concat(infoDb)
        





        res.status(200).json(totalDogs)
        
    }


}