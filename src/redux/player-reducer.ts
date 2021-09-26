import {
  IPlayer,
  IMatches,
  PlayerAction,
  PlayerActionTypes,
  SetPlayerAction,
  PlayerIsLoadingAction,
  ResetPlayerAction,
  FetchPlayerErrorAction,
  SetMathesAction,
  IsLoadingMatchesAction,
  ResetAllDataAction,
  SetPlayerErrorMessageAction
} from './../types/player';
import { playerAPI } from '../api/api';
import { delay } from '../helpers/helpers';
import { Dispatch } from 'redux';
import { validateFootballData } from '../helpers/validation';

let initialState = {
  player: null as IPlayer | null,
  matches: null as IMatches | null,
  isLoading: false,
  isFetchError: false,
  isLoadingMatches: false,
  errorPlayerMessage: ''
};

export type PlayerInitialState = typeof initialState;

const playerReducer = (state = initialState, action: PlayerAction): PlayerInitialState  => {
  switch(action.type) {
    case PlayerActionTypes.SET_PLAYER:
      return {
        ...state,
        player: action.player
      }
    case PlayerActionTypes.PLAYER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case PlayerActionTypes.RESET_PLAYER_PROFILE:
      return {
        ...state,
        player: null,
        isLoading: action.isLoading,
        matches: null,
        isLoadingMatches: false
      }
    case PlayerActionTypes.SET_FETCH_PLAYER_ERROR: 
      return {
        ...state,
        isFetchError: action.isFetchError
      }
    case PlayerActionTypes.SET_ERROR_PLAYER_MESSAGE:
      return {
        ...state,
        errorPlayerMessage: action.errorPlayerMessage
      }
    case PlayerActionTypes.SET_MATCHES: 
      return {
        ...state,
        matches: action.matches
      }
    case PlayerActionTypes.IS_LOADING_INFO: 
      return {
        ...state,
        isLoadingMatches: action.isLoadingMatches
      }
    case PlayerActionTypes.RESET_ALL_DATA:
      return initialState
    default:
      return state
  }
};

// Action creators
const setPlayerProfile = (player: IPlayer):SetPlayerAction => ({type: PlayerActionTypes.SET_PLAYER, player});
const playerIsLoading = (isLoading: boolean): PlayerIsLoadingAction => ({type: PlayerActionTypes.PLAYER_IS_LOADING, isLoading});
const resetPlayer = (isLoading: boolean): ResetPlayerAction => ({type: PlayerActionTypes.RESET_PLAYER_PROFILE, isLoading});
const setFetchPlayerError = (isFetchError: boolean): FetchPlayerErrorAction => ({type: PlayerActionTypes.SET_FETCH_PLAYER_ERROR, isFetchError});
const setMatches = (matches: IMatches): SetMathesAction => ({type: PlayerActionTypes.SET_MATCHES, matches});
const isLoadingMatches = (isLoadingMatches: boolean): IsLoadingMatchesAction => ({type: PlayerActionTypes.IS_LOADING_INFO, isLoadingMatches}); 
export const resetAllData = ():ResetAllDataAction => ({type: PlayerActionTypes.RESET_ALL_DATA});
export const setErrorPlayerMessage = (errorPlayerMessage: string): SetPlayerErrorMessageAction => ({
  type: PlayerActionTypes.SET_ERROR_PLAYER_MESSAGE,
  errorPlayerMessage
})


// Thunks
export const getPlayerProfile = (player: string) => async (dispatch: Dispatch<PlayerAction>) =>  {
    dispatch(resetPlayer(true));
    dispatch(setFetchPlayerError(false));
    await delay(500);
    try {
      const response = await playerAPI.getPlayer(player);
      dispatch(setPlayerProfile(response.data));
      dispatch(playerIsLoading(false));
    } catch (err:any) {
      dispatch(setFetchPlayerError(true));
      dispatch(setErrorPlayerMessage(validateFootballData(err.message)))
      await delay(500);
      dispatch(playerIsLoading(false));
    }
}

export const getMatсhes = (player:string, dateFrom:string, dateTo:string) => async (dispatch: Dispatch<PlayerAction>) => {
  dispatch(setFetchPlayerError(false));
  dispatch(isLoadingMatches(true));
  await delay(500);
  try {
    const response = await playerAPI.getMatches(player, dateFrom, dateTo);
    dispatch(setMatches(response.data));
    dispatch(isLoadingMatches(false));
  } catch (err:any) {
    dispatch(setFetchPlayerError(true));
    dispatch(setErrorPlayerMessage(validateFootballData(err.message)))
    await delay(500);
    dispatch(resetPlayer(false));
  }
}

export default playerReducer;