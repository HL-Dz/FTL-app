import firebase from '../firebase';
const SET_USER = 'SET_USER';


let initialStata = {
  user: null
};


const userAuthReducer = (state = initialStata, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
};

// Action Creators
export const setAuthUser = (user) => ({type: SET_USER, user});


// Firebase authorazation methods

// *** Register with email/password
export const userRegisterHandler = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
}

// *** Sign In with email/password
export const signInHandler = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
}


// *** Sign In with social networks
export const signInWithSocialNetwork = (provider) => {
  return firebase.auth().signInWithPopup(provider);
}

// ***Logout
export const logout = () => {
  firebase.auth().signOut();
}


export default userAuthReducer;