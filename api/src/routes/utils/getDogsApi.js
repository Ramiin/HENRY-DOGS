const axios = require('axios');

module.exports = async function(dog) {

    const getDogsApi = dog ? await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`) : await axios.get('https://api.thedogapi.com/v1/breeds')

    if(await getDogsApi.data.length > 0) {
        const dogsApi = await getDogsApi.data?.map(el => {
            return {
                id : el.id, 
                weight: el.weight.metric, 
                height: el.height.metric, 
                name: el.name, 
                life_span: el.life_span, 
                temperament: el.temperament, 
                image: el.image
            }
        })
        return dogsApi;

    } else return getDogsApi.data




}