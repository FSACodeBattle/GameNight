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
          <div className="col-xs-12 col-md-4 col-lg-4 col-lg-4"  id="userAnswers">
            <img
              alt='Fireworks!'
              className='img-responsive'
              src='http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif'
            />
          </div>
          <div className="col-xs-12 col-md-8 col-lg-8 col-lg-8" id="myanswer">
            My Answers:
             {
                ownAnswers && ownAnswers.map(answer =>
                  <div key={answer.id}>
                    {answer}
                  </div>
                )
             }
          </div>
          <div className="col-xs-12 col-md-8 col-lg-8 col-lg-8"  id="userAnswers">
            Opponents Answers:
             {
                opponentAnswers && opponentAnswers.map(
                  answer =>
                    <div key={answer.id}>
                      {answer}
                    </div>
                )
              };
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
