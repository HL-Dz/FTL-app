import { teamAPI } from '../api/api';
// import {delay} from '../helpers/helpers';  

const SET_TEAM = 'SET_TEAM';


let initialState = {
  team: null
};


const teamReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TEAM:
      return {
        ...state,
        team: action.team
      }
    default:
      return state
  }
};


const setTeamProfile = (team) => ({type: SET_TEAM, team});



export const getTeamProfile = (team) => async dispatch =>  {
    try {
      // await delay(1500);
      const response = await teamAPI.getTeam(team);
      dispatch(setTeamProfile(response.data));
    } catch (err) {
        
    }
}

export default teamReducer;