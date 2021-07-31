export enum PlayerActionTypes {
  SET_PLAYER = 'SET_PLAYER',
  PLAYER_IS_LOADING = 'PLAYER_IS_LOADING',
  RESET_PLAYER_PROFILE = 'RESET_PLAYER_PROFILE',
  SET_FETCH_PLAYER_ERROR = 'SET_FETCH_PLAYER_ERROR',
  SET_MATCHES = 'SET_MATCHES',
  IS_LOADING_INFO = 'IS_LOADING_INFO',
  RESET_ALL_DATA = 'RESET_ALL_DATA'
}

interface IMatchesFilters {
  dateFrom: string | null
  dateTo: string | null
  limit: number
  permission?: string | null
}

interface IMatchTeam {
  id: number
  name: string | null
}

interface ICompetition {
  id: number
  name: string | null
}

interface IReferee {
  id: number
  name: string | null
  role: string | null
  nationality: string | null
}

interface IScoreTeam {
  homeTeam: number | null
  awayTeam: number | null
}

interface IScoreMatch {
  duration: string | null
  extraTime: IScoreTeam
  fullTime: IScoreTeam
  halfTime: IScoreTeam
  penalties: IScoreTeam
  winner: string | null
}

interface ISeason {
  id: number
  currentMatchday: number | null
  startDate: string | null
  endDate: string | null
}

interface IMatch {
  id: number
  competition: ICompetition
  awayTeam: IMatchTeam
  homeTeam: IMatchTeam
  group: string | null
  lastUpdated: string | null
  matchday: number | null
  odds?: {msg: string | null} 
  referees: Array<IReferee> | []
  score: IScoreMatch
  season: ISeason
  stage: string | null
  status: string | null
  utcDate: string | null
}

export interface IPlayer {
  id: string
  countryOfBirth: string | null
  dateOfBirth: string | null
  firstName: string | null
  lastName: string | null
  lastUpdated: string | null
  name: string | null
  nationality: string | null
  position: string | null
  shirtNumber: number | null
}

export interface IMatches {
  count: number
  filters: IMatchesFilters
  matches: Array<IMatch> | []
  player: IPlayer
}


export interface SetPlayerAction {
  type: PlayerActionTypes.SET_PLAYER
  player: IPlayer
}

export interface PlayerIsLoadingAction {
  type: PlayerActionTypes.PLAYER_IS_LOADING
  isLoading: boolean
}

export interface ResetPlayerAction {
  type: PlayerActionTypes.RESET_PLAYER_PROFILE
  isLoading: boolean
}

export interface FetchPlayerErrorAction {
  type: PlayerActionTypes.SET_FETCH_PLAYER_ERROR
  isFetchError: boolean
}

export interface SetMathesAction {
  type: PlayerActionTypes.SET_MATCHES
  matches: IMatches
}

export interface IsLoadingMatchesAction {
  type: PlayerActionTypes.IS_LOADING_INFO
  isLoadingMatches: boolean
}

export interface ResetAllDataAction {
  type: PlayerActionTypes.RESET_ALL_DATA
}

export type PlayerAction = 
            SetPlayerAction
            | PlayerIsLoadingAction
            | ResetPlayerAction
            | FetchPlayerErrorAction
            | SetMathesAction
            | IsLoadingMatchesAction
            | ResetAllDataAction;