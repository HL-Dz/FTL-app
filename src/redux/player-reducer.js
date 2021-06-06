import { playerAPI } from '../api/api';
import { delay } from '../helpers/helpers';

const SET_PLAYER = 'SET_PLAYER';
const PLAYER_IS_LOADING = 'PLAYER_IS_LOADING';
const RESET_PLAYER_PROFILE = 'RESET_PLAYER_PROFILE';
const SET_FETCH_PLAYER_ERROR = 'SET_FETCH_PLAYER_ERROR';
const SET_MATCHES = 'SET_MATCHES';
const IS_LOADING_INFO = "IS_LOADING_INFO";
const RESET_ALL_DATA = 'RESET_ALL_DATA';

let initialState = {
  player: null,
  matches: null,
  isLoading: false,
  isFetchError: false,
  isLoadingMatches: false
};


const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PLAYER:
      return {
        ...state,
        player: action.player
      }
    case PLAYER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case RESET_PLAYER_PROFILE:
      return {
        ...state,
        player: null,
        isLoading: action.isLoading,
        matches: null,
        isLoadingMatches: false
      }
    case SET_FETCH_PLAYER_ERROR: 
      return {
        ...state,
        isFetchError: action.isFetchError
      }
    case SET_MATCHES: 
      return {
        ...state,
        matches: action.matches
      }
    case IS_LOADING_INFO: 
      return {
        ...state,
        isLoadingMatches: action.isLoadingMatches
      }
    case RESET_ALL_DATA:
      return initialState
    default:
      return state
  }
};


const setPlayerProfile = (player) => ({type: SET_PLAYER, player});
const playerIsLoading = (isLoading) => ({type: PLAYER_IS_LOADING, isLoading});
const resetPlayer = (isLoading) => ({type: RESET_PLAYER_PROFILE, isLoading});
const setFetchPlayerError = (isFetchError) => ({type: SET_FETCH_PLAYER_ERROR, isFetchError});
const setMatches = (matches) => ({type: SET_MATCHES, matches});
const isLoadingMatches = (isLoadingMatches) => ({type: IS_LOADING_INFO, isLoadingMatches}); 
export const resetAllData = () => ({type: RESET_ALL_DATA});


export const getPlayerProfile = (player) => async dispatch =>  {
    dispatch(setFetchPlayerError(false));
    dispatch(resetPlayer(true));
    await delay(700);
    try {
      const response = await playerAPI.getPlayer(player);
      dispatch(setPlayerProfile(response.data));
      dispatch(playerIsLoading(false));
    } catch (err) {
      dispatch(setFetchPlayerError(true));
      dispatch(playerIsLoading(false));
    }
}

export const getMatсhes = (player, dateFrom, dateTo) => async dispatch => {
  dispatch(setFetchPlayerError(false));
  dispatch(isLoadingMatches(true));
  await delay(500);
  try {
    const response = await playerAPI.getMatches(player, dateFrom, dateTo);
    dispatch(setMatches(response.data));
    dispatch(isLoadingMatches(false));
  } catch (err) {
    dispatch(setFetchPlayerError(true));
    dispatch(resetPlayer(false));
  }
}

export default playerReducer;