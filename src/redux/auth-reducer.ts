import firebase from '../firebase';
import {
  AuthAction,
  IUser,
  SetAuthUserAction,
  SetIsAuthorizedAction,
  UserActionTypes
} from '../types/auth';


let initialState = {
  user: null as IUser | null,
  isAuthorized: false
};

type AuthInitialState = typeof initialState;


const userAuthReducer = (state = initialState, action: AuthAction): AuthInitialState => {
  switch(action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    case UserActionTypes.USER_IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.isAuthorized
      }
    default:
      return state
  }
};

// Action Creators
export const setAuthUser = (user: IUser): SetAuthUserAction => ({type: UserActionTypes.SET_USER, user});
export const setIsAuthorized = (isAuthorized: boolean): SetIsAuthorizedAction => ({type: UserActionTypes.USER_IS_AUTHORIZED, isAuthorized});

// Firebase authorazation methods
// *** Register with email/password
export const userRegisterHandler = (email:string, password:string) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
}

// *** Sign In with email/password
export const signInHandler = (email:string, password:string) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
}


// *** Sign In with social networks
export const signInWithSocialNetwork = (provider:any) => {
  return firebase.auth().signInWithPopup(provider);
}

// ***Logout
export const logout = () => {
  firebase.auth().signOut();
}


export default userAuthReducer;