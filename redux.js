const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : 0,
    age : 17
}

// Reducer (Step 2)
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state,
                age : state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value : state.value + action.newValue
            } 
        default:
            return state 
    }

}

// Store (Step 1)
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription (Step 4)
store.subscribe(() => {
    console.log('store change : ', store.getState());
})

// Dispatching Action (Step 3)
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type : 'CHANGE_VALUE', newValue: 12})
console.log(store.getState());
