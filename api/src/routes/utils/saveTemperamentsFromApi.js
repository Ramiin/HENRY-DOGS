const { Temperament } = require('../../db');
const getDogsApi = require('./getDogsApi')


module.exports = async function(req, res) {

    let temperaments =  []
    const allDogs = await getDogsApi();
    const mapTemperaments = allDogs.map(el => el.temperament);
    mapTemperaments.forEach(el=> {
        
        if(el) temperaments.push(el.split(', '));
        // else temperaments.push('Sin datos')
    
    }) //Sacamos los que tienen temperamento undefined

    const listOfTemps = temperaments.flat() //aplanamos el array a un nivel 1
    const totalTemps = [...new Set(listOfTemps)] //eliminamos duplicados
    // totalTemps.map(el => {
    //         Temperament.create({ name: el
    //             });
    // })

      totalTemps.forEach(el =>{
        
        // Temperament.create({ name: el
        //                 });
       Temperament.findOrCreate({
            where: {
                name: el
            }
        })

    })

    // res.json('Done')

}


