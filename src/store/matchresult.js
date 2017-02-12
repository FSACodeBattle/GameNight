export const SET_OPPONENT_ANSWERS = 'SET_OPPONENT_ANSWERS';
export const SET_OWN_ANSWERS = 'SET_OWN_ANSWERS';
export const GET_ANSWERS = 'GET_ANSWERS';

export const getAnswers = () => {
  return {
    type: GET_ANSWERS
  }
}
export const setOpponentAnswers = (answers) => {
  return {
    type: SET_OPPONENT_ANSWERS,
    answers
  }
}

export const setOwnAnswers = (answers) => {
  return {
    type: SET_OWN_ANSWERS,
    answers
  }
}

const initialState = { opponentAnswers: [], ownAnswers: [] };
export default function matchResultsReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SET_OPPONENT_ANSWERS:
      newState.opponentAnswers = action.answers;
      break;
    case SET_OWN_ANSWERS:
      newState.ownAnswers = action.answers;
      break;
    case GET_ANSWERS:
      return newState
  }
  return newState;
}
