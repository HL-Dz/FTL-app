import { teamAPI } from '../api/api';
import {delay} from '../helpers/helpers';

const SET_TEAM = 'SET_TEAM';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const RESET_TEAM_PROFILE = 'RESET_TEAM_PROFILE';


let initialState = {
  team: null,
  isLoading: false
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
    default:
      return state
  }
};


const setTeamProfile = (team) => ({type: SET_TEAM, team});
const toggleIsLoading = (bool) => ({type: TOGGLE_IS_LOADING, bool});
const resetTeam = (bool) => ({type: RESET_TEAM_PROFILE, bool});



export const getTeamProfile = (team) => async dispatch =>  {
    dispatch(resetTeam(true))
    try {
      await delay(1000);
      const response = await teamAPI.getTeam(team);
      dispatch(setTeamProfile(response.data));
      dispatch(toggleIsLoading(false));
    } catch (err) {
      dispatch(toggleIsLoading(false));
    }
}

export default teamReducer;