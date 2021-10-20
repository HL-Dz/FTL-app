import { Dispatch } from "redux";
import { delay } from "../helpers/helpers";
import {
  AddNewClubAction,
  ChangeOrderOfClubAction,
  ClubsAction,
  ClubsActionTypes,
  IClub,
  RemoveFootballClubAction,
  SetCurrentClubAction,
  SetInactiveItemAction
} from "../types/clubs";


let initialState = {
  clubs: [] as Array<IClub> | [],
  inActiveItem: null as number | null,
  currentClub: null as IClub | null
};

let state = localStorage.getItem('savedClubs');
  if(state) {
    initialState = JSON.parse(state || JSON.stringify(initialState))
  }

type ClubsInitialState = typeof initialState;


const clubsReducer = (state = initialState, action: ClubsAction): ClubsInitialState => {
  switch(action.type) {
    case ClubsActionTypes.ADD_CLUB: 
      return {
        ...state,
        clubs: [action.club, ...state.clubs],
      }
    case ClubsActionTypes.REMOVE_CLUB: 
      return {
        ...state,
        clubs: state.clubs.filter(elem => elem.id !== action.clubId)
      }
    case ClubsActionTypes.SET_INACTIVE_ITEM:
      return {
        ...state,
        inActiveItem: action.itemId
      }
    case ClubsActionTypes.SET_CURRENT_CLUB:
      return {
        ...state,
        currentClub: action.currentClub
      }
    case ClubsActionTypes.CHANGE_ORDER_OF_CLUBS:
      return {
        ...state,
        clubs: state.clubs.map(el => {
          if(el.id === action.club.id) {
            return {...el, order: state.currentClub!.order}
          }
          if(el.id === state.currentClub!.id) {
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
export const addNewClub = (club: IClub): AddNewClubAction => ({type: ClubsActionTypes.ADD_CLUB, club});
const setInactiveItem = (itemId: number): SetInactiveItemAction => ({type: ClubsActionTypes.SET_INACTIVE_ITEM, itemId})
const removeFootballClub = (clubId: number): RemoveFootballClubAction => ({type: ClubsActionTypes.REMOVE_CLUB, clubId});
export const setCurrentClub = (currentClub: IClub): SetCurrentClubAction => ({type: ClubsActionTypes.SET_CURRENT_CLUB, currentClub});
export const changeOrderOfClubs = (club: IClub): ChangeOrderOfClubAction => ({type: ClubsActionTypes.CHANGE_ORDER_OF_CLUBS, club});


// Thunks
export const removeSavedClub = (id: number) => async (dispatch: Dispatch<ClubsAction>) => {
  dispatch(setInactiveItem(id));
  await delay(300);
  dispatch(removeFootballClub(id));
  dispatch(setInactiveItem(0));
}


export default clubsReducer;