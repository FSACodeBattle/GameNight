import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const GET_CLIENTS = 'GET_CLIENTS';

// ------------------------------------
// Actions
// ------------------------------------

export function setClients(clients) {
  return {
    type: GET_CLIENTS,
    clients
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const fetchClients = () => {
  return (dispatch) => {
    axios.get('/api/clients/all')
    .then(clients => dispatch(setClients(clients.data)));
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const inititalState = {clients: []}
export default function clientsReducer(state = inititalState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GET_CLIENTS:
      newState.clients = action.clients;
      break;
  }

  return newState;
}
