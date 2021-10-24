export enum UserActionTypes {
  SET_USER = 'SET_USER',
  USER_IS_AUTHORIZED = 'SUCCESS_AUTH',
  SET_IS_AUTH_LOADING = 'SET_IS_AUTH_LOADING'
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

export interface SetIsAuthLoadingAction {
  type: UserActionTypes.SET_IS_AUTH_LOADING
  isAuthLoading: boolean
}

export type AuthAction = SetAuthUserAction | SetIsAuthorizedAction | SetIsAuthLoadingAction;