import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import leagueReducer from "./league-reducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
  leaguePage: leagueReducer
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;