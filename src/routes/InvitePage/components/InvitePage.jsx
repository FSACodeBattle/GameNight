import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';




class InvitePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

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
      function makeid()
      {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for( var i=0; i < 6; i++ )
              text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
      }

      const inviteURL = 'http://localhost/joinGame/' + makeid();
      console.log(inviteURL.length);
    return (
      <div>
        <h1> THIS IS THE INVITE PAGE </h1>
        <input size="3" type="text" value={inviteURL}/>
      </div>
    );
  }
}

export default InvitePage