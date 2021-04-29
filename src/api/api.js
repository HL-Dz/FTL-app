import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': 'e833f0833f9f4480baab82c481aa77cf'
  }
});


export const standingsAPI = {
  getPLStandings(){
    return instance.get(`/competitions/PL/standings`);
  },
  getBundesligaStandings(){
    return instance.get(`/competitions/BL1/standings`)
      .then(response => {
        return response.data;
      })
  },
  getSerieAStandings(){
    return instance.get(`/competitions/SA/standings`)
      .then(response => {
        return response.data;
      })
  },
  getLaLigaAStandings(){
    return instance.get(`/competitions/PD/standings`)
      .then(response => {
        return response.data;
      })
  },
  getLigue1Standings(){
    return instance.get(`/competitions/FL1/standings`)
      .then(response => {
        return response.data;
      })
  },
  getPortugalStandings(){
    return instance.get(`/competitions/PPL/standings`)
      .then(response => {
        return response.data;
      })
  },
  getChampionshipStandings(){
    return instance.get(`/competitions/ELC/standings`)
      .then(response => {
        return response.data;
      })
  },
  getErediviseStandings(){
    return instance.get(`/competitions/DED/standings`)
      .then(response => {
        return response.data;
      })
  },
  getBrasilianStandings(){
    return instance.get(`/competitions/BSA/standings`)
      .then(response => {
        return response.data;
      })
  },
  getChampionsLeagueStandings(){
    return instance.get(`/competitions/CL/standings`)
      .then(response => {
        return response.data;
      })
  },
  getEuropeanChampionshipsStandings(){
    return instance.get(`/competitions/EC/standings`)
      .then(response => {
        return response.data;
      })
  },
  getWorldCupStandings(){
    return instance.get(`/competitions/WC/standings`)
      .then(response => {
        return response.data;
      })
  },
}