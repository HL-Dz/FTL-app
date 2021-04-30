import { standingsAPI } from "../api/api";

import {delay} from '../helpers/helpers';  

const SET_LEAGUE = 'SET_LEAGUE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  league: null,
  isFetching: true
};


const leagueReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LEAGUE:
      return {
        ...state,
        league: action.league
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
};


const setLeagueProfile = (league) => ({type: SET_LEAGUE, league});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const getLeague = () => {
  return async (dispatch) => {
    await delay(3000);
    standingsAPI.getPLStandings()
      .then(response => {
        dispatch(setLeagueProfile(response.data));
        dispatch(toggleIsFetching(false));
      })
  }
}

export default leagueReducer;