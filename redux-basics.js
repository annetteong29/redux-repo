// using Node
const redux = require('redux');
const createStore = redux.createStore;

// initialise state, if not state in rootReducer will be undefined
const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            // state.counter++; not immutable! NEVER mutate data.
            ...state, // copy old state
            counter: state.counter + 1 // override the one property to adjust
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            // state.counter++; not immutable! NEVER mutate data.
            ...state, // copy old state
            counter: state.counter + action.value // override the one property to adjust
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState()); // undefined

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10}); 
console.log(store.getState());