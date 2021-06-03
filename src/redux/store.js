import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import leagueReducer from "./league-reducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';
import teamReducer from "./team-reducer.js";
import playerReducer from "./player-reducer.js";

const persistedState = localStorage.getItem('mainState')
                        ? JSON.parse(localStorage.getItem('mainState'))
                        : {};

let rootReducer = combineReducers({
  leaguePage: leagueReducer,
  teamPage: teamReducer,
  playerPage: playerReducer
});

let store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {localStorage.setItem('mainState', JSON.stringify(store.getState()))});

window.store = store;

export default store;