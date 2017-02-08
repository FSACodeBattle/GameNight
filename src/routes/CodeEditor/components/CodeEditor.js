import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';
import './CodeEditor.scss';
import 'codemirror/lib/codemirror.css'
// require('codemirror/theme/solarized.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/base16-dark.css');

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    console.log("codeEditor props", this.props)
    this.state = {
      code: '',
      results: '',
      // timeRemaining: 60,
      // prevTime: null,
      timeElapsed: 0,
      startingTime: null,
      playerProgress: [0, 0],
      playerNumber: 0,
      numberOfQuestions: 2,
      currentQuestionID: 0
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
      startingTime: startingTime,

    })
  }
  updateCode(newCode) {
    this.setState ({
      code: newCode
    });
  }

  handleSubmit() {
    // console.log('handleSubmit works if this shows your code', this.state.code);
    const startingTime = this.state.startingTime;
    const playerNumber = this.state.playerNumber;
    const playerProgress = this.state.playerProgress;
    console.log("inside handleSubmit");
    console.log(socket);
    axios.post('/api/code', {
      code: this.state.code,
      timeElapsed: (Date.now() - startingTime)/1000,
      // use playerNumber in playerProgress array
      // to figure out where you are in tests
      playerNumber: this.state.playerNumber,
      playerProgress: this.state.playerProgress,
      currentQuestionID: this.props.currentQuestionID.questionID,
      room: this.props.roomID,
      socketID: socket.id
    })
    .then(response => {





       this.setState({results: response.data});
      // //console.log("response from running code: ", response.data );
      // // console.log('saved successfully');
      // console.log(this.state.results);
      // console.log(this.state.results[this.state.results.length-1] === "1");

      // if(this.state.results[this.state.results.length-1] === "1"){
      //   console.log('emitting correct response from front-end')
      //   socket.emit('correct response', {
      //     playerNumber: this.state.playerNumber,
      //     playerProgress: this.state.playerProgress
      //   });
      //   socket.on('update progress', (playerProgress) => {
      //     this.setState({
      //       playerProgress: playerProgress
      //     })
      //   })

      //   // check if game is won

      //   // console.log(playerProgress[playerNumber -1],this.state.numberOfQuestions - 1);
      //   if (playerProgress[playerNumber - 1] === this.state.numberOfQuestions - 1){
      //     console.log(playerNumber + " won!");
      //   }

        // want to leave game if you solved final question correctly
        // socket.on('disconnect', function(){
        //   console.log('socket id ' + socket.id + ' has disconnected. : (');
        // })
      //}

    })

  }
  render() {
    var options = {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'base16-dark',
      tabSize: 2,
      lineWrapping: true,
      showCursorWhenSelecting: true
    };
    var optionsForAnswers = {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'base16-dark',
      tabSize: 2,
      lineWrapping: true,
      showCursorWhenSelecting: true,
      readOnly: true
    };
    return (
      <div id="code-editor-text" className="container">
        <div className="row">
          <div className="col-xs-12">
        {/*removed the 0-0 player progress above the code editor*/}
            {/*<div className="playerProgress" style={{color: "#777"}}>
              <div>
                {this.state.playerProgress.join('-')}
              </div>
            </div>*/}
            <div id="enterCodeText"style={{color:"#777"}}>Enter Code
            </div>
            <CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              options={options}
            />
            <button id="submit-btn" className="btn btn-primary btn-small" onClick={this.handleSubmit}>SUBMIT</button>

          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div id="enterCodeText"style={{color:"#777"}}>
              Answer
            </div>
            <CodeMirror
              value={this.state.results}
              options={optionsForAnswers}
            />
          </div>
        </div>
      </div>
    );
  }
}




export default CodeEditor;


//       <div id="code-editor-text">
//         <div className="container">
//           <div className="row">
//             <div className="col-xs-12 col-md-8 col-md-offset-2" id="code-offset">
//               <div className="playerProgress" style={{color: "#777"}}>
//                   <div>
//                     {this.state.playerProgress.join('-')}
//                   </div>
//               </div>
//               <div id="enterCodeText"style={{color:"#777"}}>Enter Code
//               </div>
//               <CodeMirror
//                 value={this.state.code}
//                 onChange={this.updateCode}
//                 options={options}
//               />
//               <button id="submit-btn" className="btn btn-primary btn-small" onClick={this.handleSubmit}>SUBMIT</button>
//               <div id="enterCodeText"style={{color:"#777"}}>
//                 Answer
//               </div>
//               <CodeMirror
//                 value={this.state.results}
//                 options={optionsForAnswers}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
