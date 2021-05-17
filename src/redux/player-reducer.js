import { playerAPI } from '../api/api';

const SET_PLAYER = 'SET_PLAYER';
const PLAYER_IS_LOADING = 'PLAYER_IS_LOADING';
const RESET_PLAYER_PROFILE = 'RESET_PLAYER_PROFILE';
const SET_FETCH_PLAYER_ERROR = 'SET_FETCH_PLAYER_ERROR';


let initialState = {
  player: null,
  isLoading: false,
  isFetchError: false
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
        isLoading: action.isLoading
      }
    case SET_FETCH_PLAYER_ERROR: 
      return {
        ...state,
        isFetchError: action.isFetchError
      }
    default:
      return state
  }
};


const setPlayerProfile = (player) => ({type: SET_PLAYER, player});
const playerIsLoading = (isLoading) => ({type: PLAYER_IS_LOADING, isLoading});
const resetPlayer = (isLoading) => ({type: RESET_PLAYER_PROFILE, isLoading});
const setFetchPlayerError = (isFetchError) => ({type: SET_FETCH_PLAYER_ERROR, isFetchError});



export const getPlayerProfile = (player) => async dispatch =>  {
    dispatch(resetPlayer(true));
    try {
      const response = await playerAPI.getPlayer(player);
      dispatch(setPlayerProfile(response.data));
      dispatch(playerIsLoading(false));
    } catch (err) {
      dispatch(setFetchPlayerError(true));
      dispatch(playerIsLoading(false));
    }
}

export default playerReducer;