const { Temperament } = require('../../db');
const getDogsApi = require('./getDogsApi')


module.exports = async function(req, res) {

    let temperaments =  []
    const allDogs = await getDogsApi();
    const mapTemperaments = allDogs.map(el => el.temperament); //tenemos un array de strings
    mapTemperaments.forEach(el=> {
        
          if(el) temperaments.push(el.split(', ')); //dividimos cada string por ', ' y se pushea ese array a temperaments, descartamos undef

        // else temperaments.push('Sin datos')
    
    }) //Queda un array de arrays

    const listOfTemps = temperaments.flat() //aplanamos el array a un nivel 1
    const totalTemps = [...new Set(listOfTemps)] //eliminamos duplicados


      totalTemps.forEach(el =>{
        
     
       Temperament.findOrCreate({
            where: {
                name: el
            }
        })

    })

  }


