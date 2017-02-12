import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameWonPage.scss';

class GameWonPage extends Component {
  constructor(){
    super()
  }
  render(){
    const { ownAnswers, opponentAnswers } = this.props
    return (
      <div className="container" id="gameWonPage">
        <div className="row">
          <h1>Congratulations You Won!!</h1>
          <img
            alt='Fireworks!'
            className='fireworks'
            src='http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif' />

        </div>
        <div className="row" id="answersRow">
          <div id="userAnswers">
            My Answers:
             {
               ownAnswers && ownAnswers.map(answer => <div key={answer.id}>{answer}</div>)
             }
          </div>
          <div id="userAnswers">
            Opponents Answers:
             {
               opponentAnswers && opponentAnswers.map(answer => <div key={answer.id}>{answer}</div>)
             }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ownAnswers: state.matchResults.ownAnswers,
    opponentAnswers: state.matchResults.opponentAnswers
  }
}

export default connect(mapStateToProps)(GameWonPage);
