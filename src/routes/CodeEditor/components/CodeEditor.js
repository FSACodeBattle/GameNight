import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');

class CodeEditor extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      results: '',
      timeRemaining: 60,
      prevTime: null
    }
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.tick();
  }

  componentDidUpdate(){
    this.tick();
  }

  tick(){
    setTimeout(() => {
      // console.log(this.state.timeRemaining);
      var currentTime = Date.now();
      var dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
      var timeRemaining = Math.max(this.state.timeRemaining - dt/1000, 0);
      this.setState({
        timeRemaining: timeRemaining,
        prevTime: currentTime
      });
    }, 1000);
  }


  updateCode(newCode) {
    this.setState ({
      code: newCode
    });
  }

  //handleSubmit would take number of seconds elapsed for the score
  handleSubmit() {
    console.log('handleSubmit works if this shows your code', this.state.code);
    axios.post('/api/code', {
      code: this.state.code, 
      timeRemaining: this.state.timeRemaining
    })
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
          <CodeMirror
            value={this.state.code}
            onChange={this.updateCode}
            options={options}
          />
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