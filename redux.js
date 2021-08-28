const redux = require('redux');

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
            break;
        case 'SUB':
            return {
                counter: state.counter - 1
            }
            break;
        case 'ADD_NUMBER':
            return {
                counter: state.counter + action.value
            }
    }
    return state;
}


// Store
const store = redux.createStore(reducer);
console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

// Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter);

store.dispatch({type: 'SUB'});

store.dispatch({type: 'ADD_NUMBER', value: 12});
