const { Temperaments } = require('../../db');
const getDogsApi = require('./getDogsApi')

const allDogs = await getDogsApi();

const temperaments = allDogs.map(el => {
    
})

