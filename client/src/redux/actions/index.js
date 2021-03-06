import axios from 'axios';

export const getAllDogs = () => {
    return function(dispatch) {
        return axios.get(`/dogs`)
          .then(json => {
            dispatch({ type: 'GET_ALL_DOGS', payload: json.data });
          });
      };
};

export const getDog = (id) =>{
    return (dispatch) =>{
        return axios.get(`/dog/${id}`)
        .then(json => {
            dispatch({type: 'GET_DOG', payload: json.data})
        }).catch(err => {
            dispatch({type: 'GET_DOG', payload: {error: 'No se ha encontrado informacion adicional'}})
        }
        )
    }
}

export const clearDog = () =>{
    return (dispatch) =>{
        dispatch({type: 'CLEAR_DOG'})
    }
}


export const getTemperaments = () =>{
    return (dispatch)=> axios.get('/temperament')
    .then(json =>{
        dispatch({type: 'GET_TEMPERAMENTS', payload: json.data})
    })
}

export const postDog = (dog) => {
    return (dispatch) => axios.post('/dog', dog)
    .then(data => {
        dispatch({type: 'POST_DOG', payload : data})
    })

}


export const order = (orders) => {
    return (dispatch) =>  {
        dispatch({type: 'ORDER', payload: orders})
    }

}

export const search = (string) => {
    return (dispatch) =>  axios.get(`/dogs?name=${string}`)
     .then(json => {
      dispatch({ type: 'SEARCH', payload: json.data });
    }).catch(el =>{
        console.log(el.error)
    })

}

export const addFavorite = (dog)=> {
    return (dispatch) =>{
        dispatch({type: 'ADD_FAVORITE', payload: dog})
    }
}

export const deleteFavorite = (dog)=> {
    return (dispatch) =>{
        dispatch({type: 'DELETE_FAVORITE', payload: dog})
    }
}