import {
  ITeam, 
  SetTeamProfileAction, 
  TeamAction, 
  TeamActionTypes, 
  ToggleIsLoadingAction, 
  FetchTeamError, 
  ResetTeamProfileAction
} from './../types/team';
import { teamAPI } from '../api/api';
import {delay} from '../helpers/helpers';
import { Dispatch } from 'redux';


let initialState = {
  team: null as ITeam | null,
  isLoading: false,
  isFetchError: false
};

export type InitialState = typeof initialState;


const teamReducer = (state = initialState, action: TeamAction): InitialState => {
  switch(action.type) {
    case TeamActionTypes.SET_TEAM:
      return {
        ...state,
        team: action.team
      }
    case TeamActionTypes.TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case TeamActionTypes.SET_FETCH_TEAM_ERROR: 
      return {
        ...state,
        isFetchError: action.isFetchError
      }
    case TeamActionTypes.RESET_TEAM_PROFILE:
      return initialState
    default:
      return state
  }
};


const setTeamProfile = (team: ITeam): SetTeamProfileAction => ({type: TeamActionTypes.SET_TEAM, team});
const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingAction => ({type: TeamActionTypes.TOGGLE_IS_LOADING, isLoading});
const setFetchTeamError = (isFetchError: boolean): FetchTeamError => ({type: TeamActionTypes.SET_FETCH_TEAM_ERROR, isFetchError});
export const resetTeam = (): ResetTeamProfileAction => ({type: TeamActionTypes.RESET_TEAM_PROFILE});



export const getTeamProfile = (team: number) => async (dispatch: Dispatch<TeamAction>) =>  {
  dispatch(setFetchTeamError(false));
  dispatch(resetTeam())
  dispatch(toggleIsLoading(true));
  try {
    await delay(500);
    const response = await teamAPI.getTeam(team);
    dispatch(setTeamProfile(response.data));
    dispatch(toggleIsLoading(false));
  } catch (err) {
    dispatch(setFetchTeamError(true));
    dispatch(toggleIsLoading(false));
  }
}

export default teamReducer;