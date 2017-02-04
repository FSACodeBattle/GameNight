// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER = 'SET_USER';

// ------------------------------------
// Actions
// ------------------------------------

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const inititalState = {user: {}}
export default function usersReducer(state = inititalState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SET_USER:
      newState.user = action.user;
      break;
  }

  return newState;
}
