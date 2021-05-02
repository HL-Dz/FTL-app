import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  

const SET_EPL_LEAGUE = 'SET_EPL_LEAGUE';
const TOGGLE_IS_FETCHING_EPL = 'TOGGLE_IS_FETCHING_EPL';


let initialState = {
  league: null,
  isFetching: true
};


const eplReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_EPL_LEAGUE:
      return {
        ...state,
        league: action.league
      }
    case TOGGLE_IS_FETCHING_EPL:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
};


const setLeagueProfile = (league) => ({type: SET_EPL_LEAGUE, league});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING_EPL, isFetching})


export const getEplLeague = (league) => {
  return async (dispatch) => {
    await delay(3000);
    standingsAPI.getLeagueStandings(league)
      .then(response => {
        dispatch(setLeagueProfile(response.data));
        dispatch(toggleIsFetching(false));
      })
  }
}

export default eplReducer;