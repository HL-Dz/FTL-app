import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import bundesligaReducer from "./bundesliga-reducer.js";
import eplReducer from "./epl-reducer.js";
import primeraReducer from "./primera-reducer.js";

let rootReducer = combineReducers({
  eplPage: eplReducer,
  bundesligaPage: bundesligaReducer,
  primeraPage: primeraReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;