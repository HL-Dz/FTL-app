export enum ClubsActionTypes {
  ADD_CLUB = 'ADD_CLUB',
  REMOVE_CLUB = 'REMOVE_CLUB',
  SET_INACTIVE_ITEM = 'SET_INACTIVE_ITEM',
  SET_CURRENT_CLUB = 'SET_CURRENT_CLUB',
  CHANGE_ORDER_OF_CLUBS = 'CHANGE_ORDER_OF_CARDS',
}

export interface IClub {
  id: number
  name: string | null
  cls: string | null
  crestUrl: string | null
  order: number
}

export interface AddNewClubAction {
  type: ClubsActionTypes.ADD_CLUB
  club: IClub
}

export interface SetInactiveItemAction {
  type: ClubsActionTypes.SET_INACTIVE_ITEM
  itemId: number
}

export interface RemoveFootballClubAction {
  type: ClubsActionTypes.REMOVE_CLUB
  clubId: number
}

export interface SetCurrentClubAction {
  type: ClubsActionTypes.SET_CURRENT_CLUB
  currentClub: IClub
}

export interface ChangeOrderOfClubAction {
  type: ClubsActionTypes.CHANGE_ORDER_OF_CLUBS
  club: IClub
}

export type ClubsAction = 
          AddNewClubAction
          | SetInactiveItemAction
          | RemoveFootballClubAction
          | SetCurrentClubAction
          | ChangeOrderOfClubAction;