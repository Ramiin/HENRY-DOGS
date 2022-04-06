const { Dog, Temperament } = require('../db.js');


module.exports = async function(req, res){
   
    const image = req.body.image.url;  
    const{
        weight,
        height,
        name,
        life_span, 
        temperament
    } = req.body
   

    let filteredTemps = new Set(temperament)
    let filterTemperamentsDuplicated = [...filteredTemps];

    // let temperamentToSave = temperament.split(',')

    const dog = await Dog.create({
        weight,
        height,
        name,
        life_span, 
        image
    })


for (let i = 0; i<filterTemperamentsDuplicated.length; i++){
    let temperamentDb = await Temperament.findAll({
        where:{
            name: filterTemperamentsDuplicated[i]
        }
    })
    dog.addTemperament(temperamentDb)

}


    // dog.addTemperamperament(temperamentDb)

    res.status(200).json([dog])


}