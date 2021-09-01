export enum UserActionTypes {
  SET_USER = 'SET_USER',
  USER_IS_AUTHORIZED = 'SUCCESS_AUTH'
}

// ***User***
export interface IUser {
  displayName: string | null,
  email: string | null
  emailVerified?: boolean
  isAnonimus?: boolean
  phoneNumber: string | null
  photoURL: string | null
  uid: string
}

export interface SetAuthUserAction {
  type: UserActionTypes.SET_USER
  user: IUser | null
}

export interface SetIsAuthorizedAction {
  type: UserActionTypes.USER_IS_AUTHORIZED
  isAuthorized: boolean
}

export type AuthAction = SetAuthUserAction | SetIsAuthorizedAction;