import axios from 'axios';

export const SET_MATCHES = 'SET_MATCHES';

export const setMatches = (matches) => {
  return {
    type: SET_MATCHES,
    matches
  }
}

export const fetchMatches = (user) => {
  return (dispatch) => {
    const promise = user
    ? axios.get(`/api/users/matches/${user.id}`)
    : axios.get('/api/users/allMatches')

    return promise.then(matches => dispatch(setMatches(matches.data)));
  }
}

const initialState = {matches: []};
export default function matchesReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SET_MATCHES:
      newState.matches = action.matches;
      break;
  }

  return newState;
}
