const { Dog, Temperament } = require('../../db');
const { Op } = require('sequelize'); //Importamos los operadores desde sequelize

module.exports = async function(dog){

    //dosgDB tomara un valor de acuerdo si buscamos por Query o Todos
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


 