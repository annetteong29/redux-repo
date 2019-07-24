const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('INCREMENT'):
            // not as good
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case ('DECREMENT'):
            return {
                ...state, 
                counter: state.counter - 1
            }
        case ('ADD'):
           return {
               ...state, 
                counter: state.counter + action.value
        } 
        case ('SUBTRACT'):
           return {
               ...state,
                counter: state.counter - action.value
        } 
        case ('STORE_RESULT'):
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case ('DELETE_RESULT'):
            // const id = 2;
            // state.results.splice(id, 1); MUTABLE! no.
            // const newArray = [...state.results];
            // newArray.splice(id, 1); 
            // // if elements in array are objects,
            // // that's another problem
            const updatedArray = state.results.filter(
                // only results that have id that AREN'T 
                // id of selected element are accepted
                result => result.id !== action.resultElId
            );
            return Object.assign({}, state, {
                results: updatedArray
            });
            // {
                // ...state,
                // results: updatedArray
            // }
    }
    // default state
    return state;
}

export default reducer;