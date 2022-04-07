import axios from 'axios';

///CON FETCH:
export const getAllDogs = () => {
    return function(dispatch) {
        return fetch(`http://localhost:3001/dogs`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: 'GET_ALL_DOGS', payload: json });
          });
      };
};

export const getDog = (id) =>{
    return (dispatch) =>{
        return axios.get(`http://localhost:3001/dog/${id}`)
        .then(json => {
            dispatch({type: 'GET_DOG', payload: json.data})
        })
    }
}

export const getTemperaments = () =>{
    return (dispatch)=> fetch('http://localhost:3001/temperament')
    .then(data => data.json())
    .then(data =>{
        dispatch({type: 'GET_TEMPERAMENTS', payload: data})
    })
}

export const postDog = (dog) => {
    return (dispatch) => axios.post('http://localhost:3001/dog', dog)
    .then(data => {
        dispatch({type: 'POST_DOG', payload : data})
    })

}


export const order = (orders) => {
    return (dispatch) =>  {
        dispatch({type: 'ORDER', payload: orders})
    }

}
////////////////////////////////////////////Esta es la misma sintaxis del ejercicio de arriba para obtener las houses pero en version arrow function:
// export const getHouse = (id) => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/houses/${id}`)
//         .then(response => response.json())
//         .then(json => {
//           dispatch({ type: GET_HOUSE, payload: json });
//         });
//     };
// };
/////////////////////////////////////////////////////////////////////////////VERSION AXIOS & ARROW FUNCTION:
export const getHouse = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3000/houses/${id}`)
        .then(json => {
          dispatch({ type:' GET_HOUSE', payload: json.data });
        });
    };
};







// Inicializamos id en 3, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createHouse, descomentala cuando te haga falta;
let id = 3;

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la house.
export const createHouse = (house) =>{
    id++
    return{
        type: 'CREATE_HOUSE',
        payload: { id: id, name: house.name, region: house.region, words: house.words}
    };
}

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
export const deleteHouse = (id)=>{
    return {
        type: 'DELETE_HOUSE',
        payload: id
    }
};