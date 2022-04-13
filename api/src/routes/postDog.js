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

    const dog = await Dog.create({
        weight,
        height,
        name,
        life_span, 
        image
    })


    //Buscamos en la base de datos el temperamento y lo agregamos a dog:
for (let i = 0; i<filterTemperamentsDuplicated.length; i++){
    let temperamentDb = await Temperament.findAll({
        where:{
            name: filterTemperamentsDuplicated[i]
        }
    })
    dog.addTemperament(temperamentDb)

}


   res.status(200).json([dog])


}