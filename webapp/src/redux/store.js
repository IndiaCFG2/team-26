import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'


import slotTimeReducer from "./reducers/slotTimeReducer"

const initialState={};

// const middleware = [thunk];

const reducers=combineReducers({
    slotTime:slotTimeReducer
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)))


export default store;
