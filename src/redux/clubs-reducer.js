const ADD_CLUB = 'ADD_CLUB';
const REMOVE_CLUB = 'REMOVE_CLUB';


let initialState = {
  clubs: []
};


const clubsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CLUB: 
      let club = {
        ...action.club
      }
      return {
        ...state,
        clubs: [club, ...state.clubs]
      }
    case REMOVE_CLUB: 
      return {
        ...state,
        clubs: state.clubs.filter(elem => elem.id !== action.clubId)
      }
    default:
      return state
  }
};


export const addNewClub = (club) => ({type: ADD_CLUB, club});
export const removeFootballClub = (clubId) => ({type: REMOVE_CLUB, clubId});


export default clubsReducer;