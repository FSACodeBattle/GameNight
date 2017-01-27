import React from 'react'
import CodeMirror from 'react-codemirror'
import axios from 'axios'
require('codemirror/mode/javascript/javascript');

export class CodeEditor extends React.Component {
  constructor(){
    super();
    this.state = {
      code: 'ENTER CODE',
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
         lineNumbers: true,
         
    };
    return (
      <div>
        <h1>Enter Code</h1>
        <div style={{height: 'auto', width: '100%', 'textAlign': 'left'}}>
          <CodeMirror  value={this.state.code} onChange={this.updateCode} options={options}/>
        </div>
        <button onClick={this.handleSubmit}>SUBMIT</button>
        <h2>Your answer</h2>
        <h3>{this.state.results}</h3>
      </div>
    );
  }
}

export default CodeEditor
