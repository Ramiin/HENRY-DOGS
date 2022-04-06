const { Dog, Temperament } = require('../../db');
const { Op } = require('sequelize'); //Importamos los operadores desde sequelize

module.exports = async function(dog){

    
    const dogsDb =  dog ? await Dog.findAll({ 
        where : {name: {[Op.iLike]: `%${dog}%`}},
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    
    }) : await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
      
    return await dogsDb;

    }


 