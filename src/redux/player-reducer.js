import { playerAPI } from '../api/api';
import { delay } from '../helpers/helpers';

const SET_PLAYER = 'SET_PLAYER';
const PLAYER_IS_LOADING = 'PLAYER_IS_LOADING';
const RESET_PLAYER_PROFILE = 'RESET_PLAYER_PROFILE';
const SET_FETCH_PLAYER_ERROR = 'SET_FETCH_PLAYER_ERROR';
const SET_MATCHES = 'SET_MATCHES';
const IS_LOADING_INFO = "IS_LOADING_INFO";
const RESET_MATCHES = "RESET_MATCHES";


let initialState = {
  player: null,
  isLoading: false,
  isFetchError: false,
  matches: null,
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
    case RESET_MATCHES: 
      return {
        ...state,
        matches: null
      }
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
const resetMatches = () => ({type: RESET_MATCHES});


export const getPlayerProfile = (player) => async dispatch =>  {
    dispatch(resetPlayer(true));
    dispatch(setFetchPlayerError(false));
    dispatch(resetMatches());
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