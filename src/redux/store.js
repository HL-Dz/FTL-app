import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import usersReducer from "./testReducer";


let rootReducer = combineReducers({
  testPage: usersReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;