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
      <div className="container" id="gameFinished">
        <h1>Congratulations You Won!!</h1>
        <div className="row" id="answersRow">
          <div className="col-md-6 col-md-offset-3" id="fireworks">
            <img
              alt="Fireworks!"
              className="img-responsive"
              src='http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif'
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" id="myanswer">
            <div style={{backgroundColor: '#191919'}}>
              My Answers:
            </div>
             {
                ownAnswers && ownAnswers.map((answer, i = 1) =>
                  <div>
                    <div key={answer.id + i} style={{fontSize: '20px'}}>Question {++i}: </div>
                    <div key={answer.id}>{answer}</div>
                  </div>
                )
             }
          </div>
          <div className="col-md-5 col-md-offset-2"  id="userAnswers">
              <div style={{backgroundColor: '#191919'}}>
                Opponent's Answers:
              </div>
                {
                 opponentAnswers && opponentAnswers.map((answer, i = 1) =>
                    <div>
                      <div key={answer.id + i} style={{fontSize: '20px'}}>Question {++i}: </div>
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
