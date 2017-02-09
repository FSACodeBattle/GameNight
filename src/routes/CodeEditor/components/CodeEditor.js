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
    this.state = {
      code: '',
      results: '',
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
    // update playerNumber here using sockets
    // this is dummy code for now
    const startingTime = Date.now();
    this.setState({
      startingTime: startingTime,
    })
  }

  updateCode(newCode) {
    this.setState ({
      code: newCode
    });
  }

  handleSubmit() {
    const startingTime = this.state.startingTime;
    console.log("inside handleSubmit");
    console.log(socket);
    axios.post('/api/code', {
      code: this.state.code,
      timeElapsed: (Date.now() - startingTime)/1000,
      currentQuestionID: this.props.currentQuestionID.questionID,
      room: this.props.roomID,
      socketID: socket.id
    })
    .then(response => {
       this.setState({results: response.data});

       if(response.data.indexOf('failing') === -1 && response.data.indexOf('SyntaxError') === -1){
        this.setState({code: ''});
      }
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