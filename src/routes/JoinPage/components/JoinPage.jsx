import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');

import io from 'socket.io-client'
let socket = io(`http://localhost`)


class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
  		
    })
  }

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
        
      </div>
    );
  }
}

export default CodeEditor