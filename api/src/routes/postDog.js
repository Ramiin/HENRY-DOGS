const { Dog } = require('../db.js');
module.exports = async function(req, res){
    const image = req.body.image.url;  
    const{
        weight,
        height,
        name,
        life_span, 
        temperament,
    } = req.body
 
    const dog = await Dog.create({
        weight,
        height,
        name,
        life_span, 
        temperament,
        image
    })

    res.status(200).json(dog)


}