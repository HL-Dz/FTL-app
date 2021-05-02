import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  

const SET_BUNDESLIGA_LEAGUE = 'SET_BUNDESLIGA_LEAGUE';
const TOGGLE_IS_FETCHING_BUNDESLIGA = 'TOGGLE_IS_FETCHING_BUNDESLIGA';


let initialState = {
  league: null,
  isFetching: true
};


const bundesligaReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BUNDESLIGA_LEAGUE:
      return {
        ...state,
        league: action.league
      }
    case TOGGLE_IS_FETCHING_BUNDESLIGA:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
};


const setLeagueProfile = (league) => ({type: SET_BUNDESLIGA_LEAGUE, league});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_BUNDESLIGA, isFetching})


export const getBL1League = (league) => {
  return async (dispatch) => {
    await delay(3000);
    standingsAPI.getLeagueStandings(league)
      .then(response => {
        dispatch(setLeagueProfile(response.data));
        dispatch(toggleIsFetching(false));
      })
  }
}

export default bundesligaReducer;