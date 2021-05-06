import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  

const SET_LEAGUE = 'SET_LEAGUE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const RESET_LEAGUE = 'RESET_LEAGUE';
const SET_FETCH_LEAGUE_ERROR  ='SET_FETCH_LEAGUE_ERROR';


let initialState = {
  league: null,
  isFetching: true,
  isFetchError: false
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
    case RESET_LEAGUE:
      return {
        ...state,
        league: null,
        isFetching: action.isFetching
      }
    case SET_FETCH_LEAGUE_ERROR:
      return {
        ...state,
        isFetchError: action.payload
      }
    default:
      return state
  }
};

const resetProfile = (isFetching) => ({type: RESET_LEAGUE, isFetching});
const setLeagueProfile = (league) => ({type: SET_LEAGUE, league});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setFetchError = (isError) => ({type: SET_FETCH_LEAGUE_ERROR, payload: isError});


export const getLeague = (league) => async dispatch =>  {
    dispatch(resetProfile(true));
    try {
      await delay(1500);
      const response = await standingsAPI.getLeagueStandings(league);
      dispatch(setLeagueProfile(response.data));
      dispatch(toggleIsFetching(false));
    } catch (err) {
        dispatch(setFetchError(true));
        dispatch(toggleIsFetching(false));
    }
}

export default leagueReducer;