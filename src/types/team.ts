export enum TeamActionTypes {
  SET_TEAM = "SET_TEAM",
  TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING",
  RESET_TEAM_PROFILE = "RESET_TEAM_PROFILE",
  SET_FETCH_TEAM_ERROR = "SET_FETCH_TEAM_ERROR",
  SET_ERROR_MODAL = "SET_ERROR_MODAL"
}

export interface IAreaTeam {
  id: number;
  name: string | null
}

export interface IActiveCompetition {
  id: number
  name: string | null
  plan: string
  area: IAreaTeam
  code: string | null
  lastUpdated: string | null
}

export interface ISquadItem {
  countryOfBirth: string | null
  dateOfBirth: string | null
  id: number
  name: string | null
  nationality: string | null
  position: string | null
  role: string | null
  shirtNumber: string | null
}

export interface ITeam {
  id: number
  activeCompetition: Array<IActiveCompetition>
  address: string
  area: IAreaTeam
  clubColors: string | null
  crestUrl: string | null
  email: string | null
  founded: number | null
  lastUpdated: string | null
  name: string | null
  phone: string | null
  shortName: string | null
  squad: Array<ISquadItem> | []
  tla: string | null
  venue: string | null
  website: string | null
}

export interface SetTeamProfileAction {
  type: TeamActionTypes.SET_TEAM
  team: ITeam
}

export interface ToggleIsLoadingAction {
  type: TeamActionTypes.TOGGLE_IS_LOADING
  isLoading: boolean
}

export interface ResetTeamProfileAction {
  type: TeamActionTypes.RESET_TEAM_PROFILE
}

export interface FetchTeamErrorAction {
  type: TeamActionTypes.SET_FETCH_TEAM_ERROR
  isFetchError: boolean
  teamErrorMessage: string
}

export interface SetErrorModalAction {
  type: TeamActionTypes.SET_ERROR_MODAL
  errorModal: boolean
}

export type TeamAction = 
      SetTeamProfileAction
      | ToggleIsLoadingAction
      | ResetTeamProfileAction
      | FetchTeamErrorAction
      | SetErrorModalAction;