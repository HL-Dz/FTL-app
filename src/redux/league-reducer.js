import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  

const SET_LEAGUE = 'SET_LEAGUE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const RESET_LEAGUE = 'RESET_LEAGUE';
const SET_FETCH_LEAGUE_ERROR  ='SET_FETCH_LEAGUE_ERROR';
const SET_SCORERS = 'SET_SCORERS';
const RESET_SCORERS  = 'RESET_SCORERS';


let initialState = {
  league: null,
  isFetching: true,
  isFetchError: false,
  scorers: [],
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
    case SET_SCORERS:
      return {
        ...state,
        scorers: action.scorers
      }
    case RESET_SCORERS:
      return {
        ...state,
        scorers: [],
      }
    default:
      return state
  }
};

const resetLeagueProfile = (isFetching) => ({type: RESET_LEAGUE, isFetching});
const setLeagueProfile = (league) => ({type: SET_LEAGUE, league});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setFetchError = (isError) => ({type: SET_FETCH_LEAGUE_ERROR, payload: isError});

const setScorers = (scorers) => ({type: SET_SCORERS, scorers});
const resetScorers = () => ({type: RESET_SCORERS });

// Get league standings
export const getLeague = (league) => async dispatch =>  {
    dispatch(setFetchError(false));
    dispatch(resetLeagueProfile(true));
    try {
      await delay(300);
      const response = await standingsAPI.getLeagueStandings(league);
      dispatch(setLeagueProfile(response.data));
      dispatch(toggleIsFetching(false));
    } catch (err) {
        dispatch(setFetchError(true));
        dispatch(toggleIsFetching(false));
    }
}

// Get best 10 scorers
export const getBestLeaguePlayers = (league) => async dispatch => {
  dispatch(resetScorers());
  try {
    const response = await standingsAPI.getScorers(league);
    dispatch(setScorers(response.data.scorers));
  } catch (err) {
    dispatch(setFetchError(true));
  }
}

export default leagueReducer;