const axios = require('axios');

module.exports = async function(dog) {

    let getDogsApi;

    if(dog){
        getDogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`)

        if(await getDogsApi.data.length > 0) {
            const dogsApi = await getDogsApi.data?.map(el => {
                if(el.weight.metric=== 'NaN' || el.weight.metric.slice(0,3) === 'NaN' ){ //Elimino los registros NaN que vienen de la API
                    return {
                        id : el.id, 
                        weight: '00', 
                        height: el.height.metric, 
                        name: el.name, 
                        life_span: el.life_span, 
                        temperament: el.temperament, 
                        image: el.reference_image_id ? 'https://cdn2.thedogapi.com/images/'+el.reference_image_id+'.jpg' : 'http://images.squarespace-cdn.com/content/v1/570ee2b820c6473af089812c/8be4407d-8a0e-4c30-a39b-b753b89ae52f/Image__5_-removebg-preview.png'
                    }
                }
                return {
                    id : el.id, 
                    weight: el.weight.metric, 
                    height: el.height.metric, 
                    name: el.name, 
                    life_span: el.life_span, 
                    temperament: el.temperament, 
                    image: el.reference_image_id ? 'https://cdn2.thedogapi.com/images/'+el.reference_image_id+'.jpg' : 'http://images.squarespace-cdn.com/content/v1/570ee2b820c6473af089812c/8be4407d-8a0e-4c30-a39b-b753b89ae52f/Image__5_-removebg-preview.png'
                }
            })
            return dogsApi;
    
        } else return getDogsApi.data
        
    } 

    else{
        getDogsApi = await axios.get('https://api.thedogapi.com/v1/breeds')

        if(await getDogsApi.data.length > 0) {
            const dogsApi = await getDogsApi.data?.map(el => {
                if(el.weight.metric=== 'NaN' || el.weight.metric.slice(0,3) === 'NaN' ){ //Elimino los registros NaN que vienen de la API
                    return {
                        id : el.id, 
                        weight: '00', 
                        height: el.height.metric, 
                        name: el.name, 
                        life_span: el.life_span, 
                        temperament: el.temperament, 
                        image: el.image.url
                    }
                }
                return {
                    id : el.id, 
                    weight: el.weight.metric, 
                    height: el.height.metric, 
                    name: el.name, 
                    life_span: el.life_span, 
                    temperament: el.temperament, 
                    image: el.image.url
                }
            })
            return dogsApi;
    
        } else return getDogsApi.data
    }

    // const getDogsApi = dog ? await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`) : await axios.get('https://api.thedogapi.com/v1/breeds')

    // if(await getDogsApi.data.length > 0) {
    //     const dogsApi = await getDogsApi.data?.map(el => {
    //         if(el.weight.metric=== 'NaN' || el.weight.metric.slice(0,3) === 'NaN' ){ //Elimino los registros NaN que vienen de la API
    //             return {
    //                 id : el.id, 
    //                 weight: '00', 
    //                 height: el.height.metric, 
    //                 name: el.name, 
    //                 life_span: el.life_span, 
    //                 temperament: el.temperament, 
    //                 image: el.image
    //             }
    //         }
    //         return {
    //             id : el.id, 
    //             weight: el.weight.metric, 
    //             height: el.height.metric, 
    //             name: el.name, 
    //             life_span: el.life_span, 
    //             temperament: el.temperament, 
    //             image: el.image
    //         }
    //     })
    //     return dogsApi;

    // } else return getDogsApi.data




}
