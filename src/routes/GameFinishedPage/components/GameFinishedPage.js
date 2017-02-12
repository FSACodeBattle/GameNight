import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameFinishedPage.scss';

class GameFinishedPage extends Component {
  constructor(){
    super()
  }
  render(){
    const { ownAnswers, opponentAnswers } = this.props
    return (
      <div className="container" id="gameWonPage">
        <div className="row">
          <h1>You lost the game, but at least you finished all the questions :D</h1>
         <img
             alt='At least you tried'
             className='atLeastYouTried'
             src='http://ci.memecdn.com/2000578.gif' />

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

export default connect(mapStateToProps)(GameFinishedPage);
