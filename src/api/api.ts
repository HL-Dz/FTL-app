import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_KEY
  }
});

export const standingsAPI = {
  getLeagueStandings(league: string){
    return instance.get(`/competitions/${league}/standings`);
  },
  getScorers(league:string){
    return instance.get(`/competitions/${league}/scorers`)
  }
}

export const teamAPI = {
  getTeam(team:number){
    return instance.get(`teams/${team}`);
  }
}

export const playerAPI = {
  getPlayer(player:string){
    return instance.get(`players/${player}`)
  },
  getMatches(player:string, dateFrom:string, dateTo:string){
    return instance.get(`players/${player}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }
}