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
      <div className="container">
        <div className="row" id="headRow">
          <div className="col col-xs-12 col-md-6 col-lg-12">
            <div className="heady">
              <img
                alt="At least you tried"
                className="simpsons"
                src="http://ci.memecdn.com/2000578.gif"
              />
              <span className="memo">You Lost, But At Least You Tried ;D</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="boxy">
            <div className="col-md-5" id="myanswer">
              <div id="answersheader">
                My Answers:
              </div>
               {
                  ownAnswers && ownAnswers.map((answer, i = 1) =>
                    <div>
                      <div key={answer.id + i} style={{fontSize: '20px', color: 'black'}}>
                        Question {++i}:
                      </div>
                      <div key={answer.id}>{answer}</div>
                    </div>
                  )
               }
          </div>
          <div className="col-md-5 col-md-offset-2"  id="userAnswers">
              <div id="answersheader">
                Opponent's Answers:
              </div>
                {
                 opponentAnswers && opponentAnswers.map((answer, i = 1) =>
                    <div>
                      <div key={answer.id + i} style={{fontSize: '20px', color: 'black'}}>
                        Question {++i}:
                      </div>
                      <div key={answer.id}>{answer}</div>
                    </div>
                  )
                }
          </div>
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



      // <div className="container" id="gameWonPage">
      //   <h1>You lost the game, but at least you finished all the questions :D
      //   </h1>
      //   <div className="row" id="answersRow">
      //     <div className="col-md-6 col-md-offset-3" id="simpsons">
      //       <img
      //         alt='At least you tried'
      //         className='img-responsive'
      //         src='http://ci.memecdn.com/2000578.gif'
      //       />
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-md-5" id="myanswer">
      //       <div id="answersheader">
      //         My Answers:
      //       </div>
      //         {
      //           ownAnswers && ownAnswers.map((answer, i = 1) =>
      //             <div>
      //               <div key={answer.id + i} style={{fontSize: '20px', color: '#777'}}>
      //                 Question {++i}:
      //               </div>
      //               <div key={answer.id}>{answer}</div>
      //             </div>
      //           )
      //         }
      //     </div>
      //     <div className="col-md-5 col-md-offset-2" id="userAnswers">
      //       <div id="answersheader">
      //         Opponent's Answers:
      //       </div>
      //         {
      //           opponentAnswers && opponentAnswers.map((answer, i = 1) =>
      //             <div>
      //               <div key={answer.id + i} style={{fontSize: '20px', color: '#777'}}>
      //                 Question {++i}:
      //               </div>
      //               <div key={answer.id}>{answer}</div>
      //             </div>
      //           )
      //         }
      //     </div>
      //   </div>
      // </div>
export default connect(mapStateToProps)(GameFinishedPage);
