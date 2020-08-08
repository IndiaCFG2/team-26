import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'


import slotTimeReducer from "./reducers/slotTimeReducer"
import pfoReducer from "./reducers/pfoReducer"

const initialState={};

// const middleware = [thunk];

const reducers=combineReducers({
    slotTime:slotTimeReducer,
    pfo:pfoReducer
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)))


export default store;
