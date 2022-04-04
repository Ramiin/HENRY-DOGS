const initialState = {
    dogs: [],
    dog: [],
    temps: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
            
        case 'GET_DOG':
            return {
                ...state,
                dog: action.payload
            }
        
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temps: action.payload
            }
        case 'POST_DOG':
                return {
                    ...state,
                    dogs: state.dogs.concat(action.payload)
                }

        default:
            return state;
    };
};

export default rootReducer;