import React, { Component } from 'react'
import './BattlePageContainer.scss';
import Problem from '../components/Problem'
import CountdownClock from '../components/CountdownClock'
import CodeEditor from '../../CodeEditor/components/CodeEditor'
import axios from 'axios';

class BattlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
      //holds the question objects
      questionsArr: [],
      code: '',
      results: '',
      // timeRemaining: 60,
      // prevTime: null,
      timeElapsed: 0,
      startingTime: null,
      playerProgress: [0, 0],
      playerNumber: 0,
      numberOfQuestions: 2,
      //the index of the questionArr
      currentQuestion: 0
    }
  }
  componentDidMount(){
        //console.log(socket);
        socket.on('sending Questions', (data) => {
        //console.log(data);
        this.setState({player1: data.player1, player2: data.player2, questionsArr: data.questions })
    })
  }
  render() {
    return (
      <div>
        <div className="row-fluid-clock">
          <CountdownClock />
        </div>
        <div className="container-fluid-row-battle">
          <div className="row-fluid-battlepage">
            <div className="col col-xs-12 col-md-4 col-lg-4">
              <h5>{this.state.player1}</h5>
              <h5>{this.state.player2}</h5>
              {/**Passes in the users current question object to the Problem component by using ArrayOfQuestions[current question index]**/}
              <Problem CurrentQuestion={this.state.questionsArr[this.state.currentQuestion]}/>
            </div>
            <div className="col-xs-12 col-md-8 col-lg-8" id="codeeditor">
              <CodeEditor />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BattlePage;
