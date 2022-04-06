const initialState = {
    dogs: [],
    dog: [],
    temps: [],
    order: []
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
        case 'COPY_STATE_TO_ORDER':
                return {
                    ...state,
                    order: [...state.dogs]
                }
        case 'ORDER_BY_TEMPERAMENT':
                return {
                    ...state,
                    order: state.dogs.concat(action.payload)
                }

        default:
            return state;
    };
};

export default rootReducer;