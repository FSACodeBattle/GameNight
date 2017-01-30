'use strict';

/******************************CONSTS***************************************/
export const UPDATE_CODE = 'UPDATE_CODE';
export const GET_RESULTS = 'GET_RESULTS';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
/******************************ACTIONS***********************************/
export function updateCode(code) {
  return {
    type: UPDATE_CODE,
    code
  }
}

export function getResults(results) {
  return {
    type: GET_RESULTS,
    results
  }
}

export function handleSubmit() {
  console.log('handleSubmit works if this shows your code', this.state.code);
  axios.post('/api/code', {code: this.state.code})
  .then(response => {
    this.setState({results: response.data});
    console.log("response from running code: ", response.data );
    console.log('saved successfully');
  })
}

/*********************************ACTION CREATORS***************************/
const initialState = {
  code: '',
  results: ''
}
