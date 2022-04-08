import axios from 'axios';

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

export const search = (string) => {
    return (dispatch) =>  fetch(`http://localhost:3001/dogs?name=${string}`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: 'SEARCH', payload: json });
    }).catch(el =>{
        console.log(el.error)
    })

}