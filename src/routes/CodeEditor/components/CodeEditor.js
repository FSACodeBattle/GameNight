import React from 'react'
import CodeMirror from 'react-codemirror'
import axios from 'axios'
require('codemirror/mode/javascript/javascript');

export class CodeEditor extends React.Component {
  constructor(){
    super();
    this.state = {
      code: '',
      results: ''
    }
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateCode(newCode) {
    this.setState ({
      code: newCode,
    });
  }
  handleSubmit(){
    console.log('handleSubmit works if this shows your code', this.state.code);
    axios.post('/api/code', {code: this.state.code})
    .then(response => {

      this.setState({results: response.data});
      console.log("response from running code: ", response.data );
      console.log('saved successfully');

    })

  }
  render() {
    var options = {
      mode: "javascript",
      lineNumbers: true
    };
    return (
      <div>
        <h1>Enter Code</h1>
        <div>
          <CodeMirror  value={this.state.code} onChange={this.updateCode} options={options}/>
        </div>
        <button onClick={this.handleSubmit}>SUBMIT</button>
        <h2>Your answer</h2>
        <form>
          <textarea rows="10" cols="100" value={this.state.results}></textarea>
        </form>
      </div>
    );
  }
}

export default CodeEditor
