import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  

const SET_PRIMERA_LEAGUE = 'SET_PRIMERA_LEAGUE';
const TOGGLE_IS_FETCHING_PRIMERA = 'TOGGLE_IS_FETCHING_PRIMERA';


let initialState = {
  league: null,
  isFetching: true
};


const primeraReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PRIMERA_LEAGUE:
      return {
        ...state,
        league: action.league
      }
    case TOGGLE_IS_FETCHING_PRIMERA:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
};


const setLeagueProfile = (league) => ({type: SET_PRIMERA_LEAGUE, league});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_PRIMERA, isFetching})


export const getPrimeraLeague = (league) => {
  return async (dispatch) => {
    await delay(3000);
    standingsAPI.getLeagueStandings(league)
      .then(response => {
        dispatch(setLeagueProfile(response.data));
        dispatch(toggleIsFetching(false));
      })
  }
}

export default primeraReducer;