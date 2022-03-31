const { Dog } = require('../../db');
const { Op } = require('sequelize'); //Importamos los operadores desde sequelize

module.exports = async function(dog){

    
    const dogsDb =  dog ? await Dog.findAll({ where : {name: {[Op.iLike]: `%${dog}%`}}}) : await Dog.findAll()

    return await dogsDb;

    }


 