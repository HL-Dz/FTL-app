import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import leagueReducer from "./league-reducer";


let rootReducer = combineReducers({
  leaguePage: leagueReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;