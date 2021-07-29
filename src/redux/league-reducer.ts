import {
  ILeague,
  IScorer,
  LeagueAction,
  LeagueActionTypes,
  LeagueIsFetchingAction,
  ResetLeagueAction,
  ResetScorersAction,
  SetFetchLeagueErrorAction,
  SetLeagueAction,
  SetScorersAction
} from './../types/league';
import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  
import { Dispatch } from 'redux';


let initialState = {
  league: null as ILeague | null,
  isFetching: true,
  isFetchError: false,
  scorers: [] as Array<IScorer> | [],
};

type LeagueInitialState = typeof initialState;


const leagueReducer = (state = initialState, action: LeagueAction): LeagueInitialState => {
  switch(action.type) {
    case LeagueActionTypes.SET_LEAGUE:
      return {
        ...state,
        league: action.league
      }
    case LeagueActionTypes.LEAGUE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case LeagueActionTypes.RESET_LEAGUE:
      return {
        ...state,
        league: null,
        isFetching: action.isFetching
      }
    case LeagueActionTypes.SET_FETCH_LEAGUE_ERROR:
      return {
        ...state,
        isFetchError: action.isFetchError
      }
    case LeagueActionTypes.SET_SCORERS:
      return {
        ...state,
        scorers: action.scorers
      }
    case LeagueActionTypes.RESET_SCORERS:
      return {
        ...state,
        scorers: [],
      }
    default:
      return state
  }
};

const resetLeagueProfile = (isFetching: boolean): ResetLeagueAction => ({type: LeagueActionTypes.RESET_LEAGUE, isFetching});
const setLeagueProfile = (league: ILeague): SetLeagueAction => ({type: LeagueActionTypes.SET_LEAGUE, league});
const toggleIsFetching = (isFetching: boolean): LeagueIsFetchingAction => ({type: LeagueActionTypes.LEAGUE_IS_FETCHING, isFetching});
const setFetchError = (isFetchError: boolean): SetFetchLeagueErrorAction => ({type: LeagueActionTypes.SET_FETCH_LEAGUE_ERROR, isFetchError});
const setScorers = (scorers: Array<IScorer>): SetScorersAction => ({type: LeagueActionTypes.SET_SCORERS, scorers});
const resetScorers = (): ResetScorersAction => ({type: LeagueActionTypes.RESET_SCORERS });

// Get league standings
export const getLeague = (league: string) => async (dispatch: Dispatch<LeagueAction>) =>  {
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
export const getBestLeaguePlayers = (league: string) => async (dispatch: Dispatch<LeagueAction>) => {
  dispatch(resetScorers());
  try {
    const response = await standingsAPI.getScorers(league);
    dispatch(setScorers(response.data.scorers));
  } catch (err) {
    dispatch(setFetchError(true));
  }
}

export default leagueReducer;