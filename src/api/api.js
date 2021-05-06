import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': 'e833f0833f9f4480baab82c481aa77cf'
  }
});


export const standingsAPI = {
  getLeagueStandings(league){
    return instance.get(`/competitions/${league}/standings`);
  }
}