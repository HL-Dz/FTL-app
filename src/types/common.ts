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