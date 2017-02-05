import React , { Component } from 'react'
import { connect } from 'react-redux'
import './BattlePageContainer.scss';
import Problem from '../components/Problem'
import CountdownClock from '../components/CountdownClock'
import CodeEditor from '../../CodeEditor/components/CodeEditor'
import axios from 'axios';

class BattlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //player object holds the socket id and the number of questions answered correctly
      player1: {id:'Player One', progress: 0},
      player2: {id:'Player Two', progress: 0},
      //holds the question objects
      questionsArr: [], 
      //the index of the questionArr
      currentQuestion: 0,
      code: '',
      results: '',
      timeElapsed: 0,
      startingTime: null,
      playerProgress: [0, 0],
      playerNumber: 0,
      numberOfQuestions: 1, 
      roomID: ''
      // timeRemaining: 60,
      // prevTime: null,
    }
    this.gameWinningEmitEvent = this.gameWinningEmitEvent.bind(this);

  }

  gameWinningEmitEvent(){
    socket.emit('gameOver', {roomID: this.state.roomID, winnerID: this.state.player1.id, score: [this.state.player1.progress, this.state.player2.progress], time: this.state.timeElapsed})
  }

  componentDidMount(){
    //set the player ids to their socket ids 
    //get the questions getting sent from the backend and store them in questionsArr
    socket.on('sending Questions', (data) => {  
    this.setState({player1: {id:data.player1, progress: 0}, player2: {id: data.player2, progress: 0}, questionsArr: data.questions})
    })

    
    //when someone gets a question correct
    socket.on('updatePlayerScore', (data) => {
      console.log("socket data",data);
      //string will hold the player who got the question correct 
      let playerToUpdate = data.playerToUpdate;
      if(playerToUpdate === 'Player1'){
        console.log("player 1 state", this.state.player1); 
        //if the the clients socket ID matches the socket ID of player 1  
        if(socket.id === data.currentPlayer){
          //change player 1's progress and their current question 
          this.setState( {player1: {id: this.state.player1.id, progress: (this.state.player1.progress + 1)}, currentQuestion: (this.state.currentQuestion + 1), roomID: data.roomID}, () => {
            if(this.state.player1.progress === 1){
                //
                console.log("inside win check")
                //
                socket.emit('gameOver', {roomID: this.state.roomID, winnerID: this.state.player1.id, score: [this.state.player1.progress, this.state.player2.progress], time: this.state.timeElapsed});
                
              }
          });
          
          console.log('Player 1 progress updated and the question should have changed', this.state.player1.progress)
        }
        else{
          //change player 1's progress to update the score
          this.setState( {player1: {id: this.state.player1.id, progress: (this.state.player1.progress + 1)}, roomID: data.roomID});
          console.log('Player 1 progress updated', this.state.player1.progress)
        }
      }
      //player must be player 2
      else{
        console.log("player 2 state",this.state.player2);
        //if the client is player 2 update their progress and change the score       
        if(socket.id === data.currentPlayer){
          this.setState( {player2: {id: this.state.player2.id, progress: (this.state.player2.progress + 1)}, currentQuestion: (this.state.currentQuestion + 1), roomID: data.roomID}, () => {
              if(this.state.player2.progress === 1){
                    console.log("inside win check")
                    //
                    socket.emit('gameOver', {roomID: this.state.roomID, winnerID: this.state.player2.id, score: [this.state.player1.progress, this.state.player2.progress], time: this.state.timeElapsed});
                    
                  }
          });
          
          console.log('Player 2 progress updated and the question should have changed', this.state.player2.progress) 
        }
        else{
          //just change player 2's score
          this.setState( {player2: {id: this.state.player2.id, progress: (this.state.player2.progress + 1)}, roomID: data.roomID})
          console.log('Player 2 progress updated', this.state.player2.progress )
        }
      }
      console.log(`${data.playerToUpdate} has completed a question`);

    })

    //when a player fails an attempt
    socket.on('failedSub', (data) => {
      console.log(`${data.playerToUpdate} has failed an attempt because of ${data.reason}`);
    })


    socket.on('gameWinningState', (data) => {
      console.log(data.winner, "won");
    })

  }
 
  render() {
    console.log("render of the container",this.state.questionsArr[this.state.currentQuestion]);
    return (
        <div>
          <div className="row-fluid-clock">
            <CountdownClock />
          </div>
          <div className="container-fluid-row-battle">
            <div className="row-fluid-battlepage">
              <div className="col-xs-4">
                <h2>{`${this.state.player1.id} - ${this.state.player1.progress}`}</h2>
                <h2>{`${this.state.player2.id} - ${this.state.player2.progress}`}</h2>
                {/**Passes in the users current question object to the Problem component by using ArrayOfQuestions[current question index]**/}
                <Problem CurrentQuestion={this.state.questionsArr[this.state.currentQuestion]}/>
              </div>
              <div className="col-xs-8">
                <CodeEditor currentQuestionID={this.state.questionsArr[this.state.currentQuestion]} roomID={this.props.roomID.id}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({roomID : state.gameLobby})

export default connect(mapStateToProps)(BattlePage);
