import { ILeague } from "./league";

export interface ISearch {
  search: string
  setSearch: (elem: string) => void
};

export interface ILocationProps {
  hash: string
  pathname: string
  serach: string
  state?: undefined
}

export interface LeagueProps {
  league: ILeague
  isFetching: boolean
  isFetchError: boolean
  errorLeagueMessage: string
}

export interface LeagueDataCardProps {
  id: number,
  title: string,
  path: string,
  imgSrc: string
  imgSrcMini: string,
  code: string
}