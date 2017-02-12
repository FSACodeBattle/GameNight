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
            <img
              alt='Fireworks!'
              className='img-responsive'
              src='http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif'
            />
        </div>
        <div className="row justify-content-around">
          <div className="col-xs-12 col-md-6 col-lg-6 col-lg-6" id="myanswer">
            My Answers:
             {
                ownAnswers && ownAnswers.map((answer, i = 1) =>
                  <div>
                    <div key={answer.id + i}>Question {++i}</div>
                    <div key={answer.id}>{answer}</div>
                  </div>
                )
             }
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6 col-lg-6"  id="userAnswers">
              Opponent's Answers:
                {
                 opponentAnswers && opponentAnswers.map((answer, i = 1) =>
                    <div>
                      <div key={answer.id + i}>Question {++i}</div>
                      <div key={answer.id}>{answer}</div>
                    </div>
                  )
                }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ownAnswers: state.matchResults.ownAnswers,
    opponentAnswers: state.matchResults.opponentAnswers
  }
}

export default connect(mapStateToProps)(GameWonPage);
