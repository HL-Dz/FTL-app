import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_KEY
  }
});

export const standingsAPI = {
  getLeagueStandings(league){
    return instance.get(`/competitions/${league}/standings`);
  },
  getScorers(league){
    return instance.get(`/competitions/${league}/scorers`)
  }
}

export const teamAPI = {
  getTeam(team){
    return instance.get(`teams/${team}`);
  }
}

export const playerAPI = {
  getPlayer(player){
    return instance.get(`players/${player}`)
  },
  getMatches(player, dateFrom, dateTo){
    return instance.get(`players/${player}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
  }
}