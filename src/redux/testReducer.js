const TEST_ACTION = 'TEST_ACTION';


let initialState = {
  users: [
    {id: 1, title: 'Lorem1', name: 'John', surname: 'Doe', isAdmin: false},
    {id: 2, title: 'Lorem ipsum', name: 'John', surname: 'Doe', isAdmin: true},
    {id: 3, title: 'Something', name: 'Alex', surname: 'Ivanov', isAdmin: false},
    {id: 4, title: 'Something 2', name: 'Alan', surname: 'Smith', isAdmin: true},
  ],
  isAction: false
};


const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_ACTION:
      return {
        ...state,
        isAction: true
      }
    default: 
      return state
  }
};


export default usersReducer;