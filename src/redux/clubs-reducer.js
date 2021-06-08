import { delay } from "../helpers/helpers";

const ADD_CLUB = 'ADD_CLUB';
const REMOVE_CLUB = 'REMOVE_CLUB';
const SET_INACTIVE_ITEM = 'SET_INACTIVE_ITEM';
const SET_CURRENT_CLUB = 'SET_CURRENT_CLUB';
const CHANGE_ORDER_OF_CLUBS = 'CHANGE_ORDER_OF_CARDS';


let initialState = {
  clubs: [],
  inActiveItem: null,
  currentClub: null
};


const clubsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CLUB: 
      let club = {
        ...action.club,
        cls: 'current-club',
        order: action.index
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
    case SET_CURRENT_CLUB:
      return {
        ...state,
        currentClub: action.currentClub
      }
    case CHANGE_ORDER_OF_CLUBS:
      return {
        ...state,
        clubs: state.clubs.map(el => {
          if(el.id === action.club.id) {
            return {...el, order: state.currentClub.order}
          }
          if(el.id === state.currentClub.id) {
            return {...el, order: action.club.order}
          }
          return el;
        })
      }
    default:
      return state
  }
};


// Action Creators
export const addNewClub = (club, index) => ({type: ADD_CLUB, club, index});
const setInactiveItem = (itemId) => ({type: SET_INACTIVE_ITEM, itemId})
const removeFootballClub = (clubId) => ({type: REMOVE_CLUB, clubId});
export const setCurrentClub = (currentClub) => ({type: SET_CURRENT_CLUB, currentClub});
export const changeOrderOfClubs = (club) => ({type: CHANGE_ORDER_OF_CLUBS, club});


// Thunks
export const removeSavedClub = (id) => async dispatch => {
  dispatch(setInactiveItem(id));
  await delay(300);
  dispatch(removeFootballClub(id));
  dispatch(setInactiveItem(null));
}


export default clubsReducer;