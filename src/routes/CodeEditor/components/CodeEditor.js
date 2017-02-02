import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');

import io from 'socket.io-client'
let socket = io(`http://localhost`)


class CodeEditor extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      results: '',
      // timeRemaining: 60,
      // prevTime: null,
      timeElapsed: 0,
      startingTime: null,
      playerProgress: [0, 0],
      playerNumber: 0
    }
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // this.tick();
    
    // update playerNumber here using sockets
    // this is dummy code for now
    const startingTime = Date.now();
    this.setState({
      playerNumber: 1,
      startingTime: startingTime
    })
  }
  // when component mounts can you save the start time
  // then when you submit, send the difference?

  // put socket.on in handleSubmit? will this work?

  // componentDidUpdate(){
    // this.tick();
  // }

  // tick(){
  //   setTimeout(() => {
  //     var currentTime = Date.now();
  //     var dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
  //     var timeRemaining = Math.max(this.state.timeRemaining - dt/1000, 0);
  //     this.setState({
  //       timeRemaining: timeRemaining,
  //       prevTime: currentTime
  //     });
  //   }, 1000);
  // }


  updateCode(newCode) {
    this.setState ({
      code: newCode
    });
  }

  handleSubmit() {
    console.log('handleSubmit works if this shows your code', this.state.code);
    const startingTime = this.state.startingTime;
    axios.post('/api/code', {
      code: this.state.code, 
      timeElapsed: (Date.now() - startingTime)/1000
    })
    .then(response => {
      this.setState({results: response.data});
      console.log("response from running code: ", response.data );
      console.log('saved successfully');

      // if response.data is correct, then emit question is passed to server
      if(response.data.slice(0, 39) === "bash: line 21: babel: command not found"){
        console.log('emitting correct response from front-end')
        // console.log(this.state.playerNumber);
        socket.emit('correct response', {playerNumber: this.state.playerNumber});
        socket.on('update progress', (playerProgress) => {
          this.setState({
            playerProgress: playerProgress
          })
        })
        // console.log(this.state.playerProgress);
      }

    })

  }
  render() {
    var options = {
      mode: "javascript",
      lineNumbers: true
    };
    
    return (
      <div>
        <h1>{this.state.playerProgress.join('-')}</h1>
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