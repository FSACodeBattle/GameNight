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
        <h1>Congratulations You Won!!</h1>
        <div className="row" id="answersRow">
          <div className="col-xs-10 col-sm-5 col-md-5 col-lg-5" id="userAnswers">
            Your Answers:
             {
               ownAnswers && ownAnswers.map((answer, i = 1) =>
                <div>
                  <div key={answer.id + i}>Question {++i}</div>
                  <div key={answer.id}>{answer}</div>
                  <br />
                </div>
                )
             }
          </div>
          <div className="col-xs-10 col-sm-5 col-md-5 col-lg-5" id="userAnswers">
            Opponent's Answers:
             {
               opponentAnswers && opponentAnswers.map((answer, i = 1) =>
                <div>
                  <div key={answer.id + i}>Question {++i}</div>
                  <div key={answer.id}>{answer}</div>
                  <br />
                </div>
                )
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
