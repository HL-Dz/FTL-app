import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import leagueReducer from "./league-reducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';
import teamReducer from "./team-reducer.js";
import playerReducer from "./player-reducer.js";

let rootReducer = combineReducers({
  leaguePage: leagueReducer,
  teamPage: teamReducer,
  playerPage: playerReducer
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;