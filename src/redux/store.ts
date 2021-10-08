import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import leagueReducer from "./league-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import teamReducer from "./team-reducer";
import playerReducer from "./player-reducer";
import clubsReducer from "./clubs-reducer";
import userAuthReducer from "./auth-reducer";
import articlesReduer from "./articles-reducer";

const persistedState = localStorage.getItem('mainState')
                        ? JSON.parse(localStorage.getItem('mainState') || '{}')
                        : {};

let rootReducer = combineReducers({
  leaguePage: leagueReducer,
  teamPage: teamReducer,
  playerPage: playerReducer,
  clubsPage: clubsReducer,
  auth: userAuthReducer,
  articles: articlesReduer
});


let store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
store.subscribe(() => {localStorage.setItem('mainState', JSON.stringify(store.getState()))});

export type RootState = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;

export default store;