import { IPlayer } from "./player";

export enum LeagueActionTypes {
  SET_LEAGUE = 'SET_LEAGUE',
  LEAGUE_IS_FETCHING = 'LEAGUE_IS_FETCHING',
  RESET_LEAGUE = 'RESET_LEAGUE',
  SET_FETCH_LEAGUE_ERROR  ='SET_FETCH_LEAGUE_ERROR',
  SET_LEAGUE_ERROR_MESSAGE = 'SET_LEAGUE_ERROR_MESSAGE',
  SET_SCORERS = 'SET_SCORERS',
  RESET_SCORERS  = 'RESET_SCORERS',
}

// ***League***
export interface ILeague {
  competition: ICompetition
  season: ISeason
  standings: Array<IStandingsType>
}

// Competition
export interface ICompetition {
  id: number
  area: ICompetitionArea
  code: string
  name: string
  lastUpdated: string | null
  plan?: string
}

export interface ICompetitionArea {
  id: number
  name: string
}

// Season
export interface ISeason {
  id: number
  currentMatchday: number | null
  startDate: string | null
  endDate: string | null
  winner: {
    name: string
  } | null
}

// Standings
export interface IStandingsType {
  group: string | null
  stage: string | null
  table: Array<ITeamPosition>
  type: string
}

export interface ITeamPosition {
  draw: number | null
  form: string | null
  goalDifference: number | null
  goalsAgainst: number | null
  goalsFor: number | null
  lost: number | null
  playedGames: number | null
  points: number | null
  position: number | null
  won: number | null
  team: ITeamDesc
}

export interface ITeamDesc {
  id: number
  crestUrl: string | null
  name: string | null
}

// Scorer
export interface IScorer {
  numberOfGoals: number
  player: IPlayer
  team: IScorerTeam
}

export interface IScorerTeam {
  id: number
  name: string | null
}

// Action types
export interface SetLeagueAction {
  type: LeagueActionTypes.SET_LEAGUE
  league: ILeague
}

export interface LeagueIsFetchingAction {
  type: LeagueActionTypes.LEAGUE_IS_FETCHING
  isFetching: boolean
}

export interface ResetLeagueAction {
  type: LeagueActionTypes.RESET_LEAGUE
  isFetching: boolean
}

export interface SetFetchLeagueErrorAction {
  type: LeagueActionTypes.SET_FETCH_LEAGUE_ERROR
  isFetchError: boolean
}

export interface SetLeagueErroMessageAction {
  type: LeagueActionTypes.SET_LEAGUE_ERROR_MESSAGE
  errorLeagueMessage: string
}

export interface SetScorersAction {
  type: LeagueActionTypes.SET_SCORERS
  scorers: Array<IScorer>
}

export interface ResetScorersAction {
  type: LeagueActionTypes.RESET_SCORERS
}


export type LeagueAction = 
        SetLeagueAction 
        | LeagueIsFetchingAction
        | ResetLeagueAction
        | SetFetchLeagueErrorAction
        | SetLeagueErroMessageAction
        | SetScorersAction
        | ResetScorersAction;