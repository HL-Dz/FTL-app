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
  SetLeagueErroMessageAction,
  SetScorersAction
} from './../types/league';
import { standingsAPI } from "../api/api";
import {delay} from '../helpers/helpers';  
import { Dispatch } from 'redux';
import { validateLeagueMessage } from '../helpers/validation';


let initialState = {
  league: null as ILeague | null,
  isFetching: true,
  isFetchError: false,
  scorers: [] as Array<IScorer> | [],
  errorLeagueMessage: ''
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
    case LeagueActionTypes.SET_LEAGUE_ERROR_MESSAGE:
      return {
        ...state,
        errorLeagueMessage: action.errorLeagueMessage
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

export const resetLeagueProfile = (isFetching: boolean): ResetLeagueAction => ({type: LeagueActionTypes.RESET_LEAGUE, isFetching});
const setLeagueProfile = (league: ILeague): SetLeagueAction => ({type: LeagueActionTypes.SET_LEAGUE, league});
export const toggleIsFetching = (isFetching: boolean): LeagueIsFetchingAction => ({type: LeagueActionTypes.LEAGUE_IS_FETCHING, isFetching});
export const setFetchError = (isFetchError: boolean): SetFetchLeagueErrorAction => ({type: LeagueActionTypes.SET_FETCH_LEAGUE_ERROR, isFetchError});
export const setErrorLeagueMessage = (errorLeagueMessage: string): SetLeagueErroMessageAction => ({type: LeagueActionTypes.SET_LEAGUE_ERROR_MESSAGE, errorLeagueMessage})
const setScorers = (scorers: Array<IScorer>): SetScorersAction => ({type: LeagueActionTypes.SET_SCORERS, scorers});
const resetScorers = (): ResetScorersAction => ({type: LeagueActionTypes.RESET_SCORERS });

// Get league standings
export const getLeague = (league: string) => async (dispatch: Dispatch<LeagueAction>) =>  {
    dispatch(setErrorLeagueMessage(''));
    dispatch(setFetchError(false));
    dispatch(resetLeagueProfile(true));
    try {
      await delay(500);
      const response = await standingsAPI.getLeagueStandings(league);
      dispatch(setLeagueProfile(response.data));
      dispatch(toggleIsFetching(false));
    } catch (err: any) {
        dispatch(setFetchError(true));
        dispatch(setErrorLeagueMessage(validateLeagueMessage(err.message)));
        dispatch(toggleIsFetching(false));
    }
}

// Get best 10 scorers
export const getBestLeaguePlayers = (league: string) => async (dispatch: Dispatch<LeagueAction>) => {
  dispatch(setErrorLeagueMessage(''));
  dispatch(resetScorers());
  try {
    const response = await standingsAPI.getScorers(league);
    dispatch(setScorers(response.data.scorers));
  } catch (err: any) {
    dispatch(setFetchError(true));
    dispatch(setErrorLeagueMessage(validateLeagueMessage(err.message)));
  }
}

export default leagueReducer;