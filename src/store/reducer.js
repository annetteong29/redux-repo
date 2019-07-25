import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // not as good
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state, 
                counter: state.counter - 1
            }
        case actionTypes.ADD:
           return {
               ...state, 
                counter: state.counter + action.value
        } 
        case actionTypes.SUBTRACT:
           return {
               ...state,
                counter: state.counter - action.value
        } 
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // state.results.splice(id, 1); MUTABLE! no.
            // const newArray = [...state.results];
            // newArray.splice(id, 1); 
            const updatedArray = state.results.filter(
                // only results that have id that AREN'T 
                // id of selected element are accepted
                result => result.id !== action.resultElId
            );
            return Object.assign({}, state, {
                results: updatedArray
            });
    }
    // default state
    return state;
}

export default reducer;