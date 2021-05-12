import { teamAPI } from '../api/api';
import {delay} from '../helpers/helpers';

const SET_TEAM = 'SET_TEAM';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const RESET_TEAM_PROFILE = 'RESET_TEAM_PROFILE';
const SET_FETCH_TEAM_ERROR = 'SET_FETCH_TEAM_ERROR';


let initialState = {
  team: null,
  isLoading: false,
  isFetchError: false
};


const teamReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TEAM:
      return {
        ...state,
        team: action.team
      }
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case RESET_TEAM_PROFILE:
      return {
        ...state,
        team: null,
        isLoading: action.isLoading
      }
    case SET_FETCH_TEAM_ERROR: 
      return {
        ...state,
        isFetchError: action.isFetchError
      }
    default:
      return state
  }
};


const setTeamProfile = (team) => ({type: SET_TEAM, team});
const toggleIsLoading = (bool) => ({type: TOGGLE_IS_LOADING, bool});
const resetTeam = (bool) => ({type: RESET_TEAM_PROFILE, bool});
const setFetchTeamError = (isFetchError) => ({type: SET_FETCH_TEAM_ERROR, isFetchError});



export const getTeamProfile = (team) => async dispatch =>  {
    dispatch(resetTeam(true))
    try {
      await delay(1000);
      const response = await teamAPI.getTeam(team);
      dispatch(setTeamProfile(response.data));
      dispatch(toggleIsLoading(false));
    } catch (err) {
      dispatch(setFetchTeamError(true));
      dispatch(toggleIsLoading(false));
    }
}

export default teamReducer;