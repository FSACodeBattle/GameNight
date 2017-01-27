import React from 'react'
import CodeMirror from 'react-codemirror'
import axios from 'axios'

export class CodeEditor extends React.Component {
  constructor(){
    super();
    this.state = {
      code: 'ENTER CODE'
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

      //this.setState({code: response.data});
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
        <h1>{this.state.code}</h1>
        <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
        <button onClick={this.handleSubmit}>SUBMIT</button>
      </div>
    );
  }
}

export default CodeEditor
