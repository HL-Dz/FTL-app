import {
  ITeam, 
  SetTeamProfileAction, 
  TeamAction, 
  TeamActionTypes, 
  ToggleIsLoadingAction, 
  FetchTeamErrorAction, 
  ResetTeamProfileAction,
  SetErrorModalAction
} from './../types/team';
import { teamAPI } from '../api/api';
import {delay} from '../helpers/helpers';
import { Dispatch } from 'redux';
import { validateLeagueMessage } from '../helpers/validation';


let initialState = {
  team: null as ITeam | null,
  isLoading: false,
  isFetchError: false,
  teamErrorMessage: '',
  errorModal: true
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
        isFetchError: action.isFetchError,
        teamErrorMessage: action.teamErrorMessage
      }
    case TeamActionTypes.SET_ERROR_MODAL:
      return {
        ...state,
        errorModal: action.errorModal
      }
    case TeamActionTypes.RESET_TEAM_PROFILE:
      return {
        ...state,
        team: null,
        isLoading: false,
        isFetchError: false,
        teamErrorMessage: ''
      }
    default:
      return state
  }
};


const setTeamProfile = (team: ITeam): SetTeamProfileAction => ({type: TeamActionTypes.SET_TEAM, team});
const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingAction => ({type: TeamActionTypes.TOGGLE_IS_LOADING, isLoading});
const setFetchTeamError = (isFetchError: boolean, teamErrorMessage: string): FetchTeamErrorAction => ({
  type: TeamActionTypes.SET_FETCH_TEAM_ERROR,
  isFetchError,
  teamErrorMessage
});
export const setErrorModal = (errorModal: boolean): SetErrorModalAction => ({type: TeamActionTypes.SET_ERROR_MODAL, errorModal});
export const resetTeam = (): ResetTeamProfileAction => ({type: TeamActionTypes.RESET_TEAM_PROFILE});



export const getTeamProfile = (team: number) => async (dispatch: Dispatch<TeamAction>) =>  {
  dispatch(resetTeam())
  dispatch(toggleIsLoading(true));
  try {
    await delay(500);
    const response = await teamAPI.getTeam(team);
    dispatch(setTeamProfile(response.data));
    dispatch(toggleIsLoading(false));
  } catch (err: any) {
    dispatch(setErrorModal(true));
    dispatch(setFetchTeamError(true, validateLeagueMessage(err.message)));
    dispatch(toggleIsLoading(false));
  }
}

export default teamReducer;