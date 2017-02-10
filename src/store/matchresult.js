
export const SET_OPPONENT_ANSWERS = 'SET_OPPONENT_ANSWERS';

export const setOpponentAnswers = (answers) => {
  return {
    type: SET_OPPONENT_ANSWERS,
    answers
  }
}

const initialState = { answers: [] };
export default function matchResultsReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case SET_OPPONENT_ANSWERS:
      newState.answers = action.answers;
      break;
  }

  return newState;
}
