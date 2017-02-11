import axios from 'axios';

export const SET_PROFILE_USER = 'SET_PROFILE_USER';
export const SET_PROFILE_MATCHES = 'SET_PROFILE_MATCHES';

export function setProfileUser(user) {
  return {
    type: SET_PROFILE_USER,
    user
  }
}

export function setProfileMatches(matches) {
  return {
    type: SET_PROFILE_MATCHES,
    matches
  }
}

export const fetchProfile = (username) => {
  return (dispatch) => {
    let user;

    axios.get(`/api/users/user/${username}`)
    .then(res => res.data)
    .then(usr => {
      user = usr;
      return axios.get(`/api/users/matches/${user.id}`);
    })
    .then(result => result.data)
    .then(matches => {
      dispatch(setProfileUser(user));
      dispatch(setProfileMatches(matches));
    })
    .catch(err => {})
  }
}

const initialState = { user: {}, matches: [] };
export default function profilesReducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch(action.type) {
    case SET_PROFILE_USER:
      newState.user = action.user;
      break;
    case SET_PROFILE_MATCHES:
      newState.matches = action.matches;
      break;
  }

  return newState;
}
