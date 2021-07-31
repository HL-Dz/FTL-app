import axios from 'axios';
import { ICompetition, ILeague, IScorer, ISeason } from '../types/league';
import { IMatches, IPlayer } from '../types/player';
import { ITeam } from '../types/team';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_KEY
  }
});

type ScorersResponseType = {
  count: number
  competition: ICompetition
  scorers: Array<IScorer> | []
  season: ISeason
}

export const standingsAPI = {
  getLeagueStandings(league: string){
    return instance.get<ILeague>(`/competitions/${league}/standings`);
  },
  getScorers(league:string){
    return instance.get<ScorersResponseType>(`/competitions/${league}/scorers`);
  }
}

export const teamAPI = {
  getTeam(team:number){
    return instance.get<ITeam>(`teams/${team}`);
  }
}

export const playerAPI = {
  getPlayer(player:string){
    return instance.get<IPlayer>(`players/${player}`)
  },
  getMatches(player:string, dateFrom:string, dateTo:string){
    return instance.get<IMatches>(`players/${player}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }
}