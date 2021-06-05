import { delay } from "../helpers/helpers";

const ADD_CLUB = 'ADD_CLUB';
const REMOVE_CLUB = 'REMOVE_CLUB';
const SET_INACTIVE_ITEM = 'SET_INACTIVE_ITEM'


let initialState = {
  clubs: [],
  inActiveItem: null
};


const clubsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CLUB: 
      let club = {
        ...action.club,
        cls: 'current-club'
      }
      return {
        ...state,
        clubs: [club, ...state.clubs],
      }
    case REMOVE_CLUB: 
      return {
        ...state,
        clubs: state.clubs.filter(elem => elem.id !== action.clubId)
      }
    case SET_INACTIVE_ITEM:
      return {
        ...state,
        inActiveItem: action.itemId
      }
    default:
      return state
  }
};


export const addNewClub = (club) => ({type: ADD_CLUB, club});
const setInactiveItem = (itemId) => ({type: SET_INACTIVE_ITEM, itemId})
const removeFootballClub = (clubId) => ({type: REMOVE_CLUB, clubId});

export const removeSavedClub = (id) => async dispatch => {
  dispatch(setInactiveItem(id));
  await delay(700);
  dispatch(setInactiveItem(null));
  dispatch(removeFootballClub(id));
}


export default clubsReducer;