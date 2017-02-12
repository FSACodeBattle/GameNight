import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameFinishedPage.scss';

class GameFinishedPage extends Component {
  constructor() {
    super()
  }

  render(){
    const { ownAnswers, opponentAnswers } = this.props
    return (
      <div className="container" id="gameWonPage">
        <h1>You lost the game, but at least you finished all the questions :D
        </h1>
        <div className="row" id="answersRow">
          <div className="col-xs-12 col-md-4 col-lg-4 col-lg-4" id="userAnswers">
            <img
              alt='At least you tried'
              className='img-responsive'
              src='http://ci.memecdn.com/2000578.gif' />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8" id="myanswer">
            My Answers:
             {
                ownAnswers && ownAnswers.map(answer =>
                  <div key={answer.id}>
                    {answer}
                  </div>
                )
             }
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8" id="userAnswers">
            Opponents Answers:
              {
                opponentAnswers && opponentAnswers.map(answer =>
                  <div key={answer.id}>
                   {answer}
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

export default connect(mapStateToProps)(GameFinishedPage);
