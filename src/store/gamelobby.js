// ------------------------------------
// Constants
// ------------------------------------
export const SET_ROOM_ID = 'SET_ROOM_ID';

// ------------------------------------
// Actions
// ------------------------------------

export function setRoomId(roomid) {
  return {
    type: SET_ROOM_ID,
    id: roomid
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {id: ''};

export default function gameLobbyReducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SET_ROOM_ID:
      newState.id = action.id;
      break;
  }

  return newState;
}
