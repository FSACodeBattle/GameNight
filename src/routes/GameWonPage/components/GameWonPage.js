import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameWonPage.scss';
import CodeMirror from 'react-codemirror';

class GameWonPage extends Component {
  constructor(){
    super()
  }
  render(){
    const { ownAnswers, opponentAnswers } = this.props;
    var optionsForAnswers = {
      mode: 'javascript',
      lineNumbers: true,
      theme: 'base16-dark',
      tabSize: 2,
      lineWrapping: true,
      showCursorWhenSelecting: true,
      readOnly: true
    };
    return (
      <div className="container" id="gameCompletePage">
        <div className="row" id="headRow">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="heady">
              <img src="http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif" className="fireworks" />
              <span className="slogan">Congratulations You Won!</span>
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
                      <div key={answer.id} >
                        <CodeMirror 
                          value={answer} 
                          options={optionsForAnswers}
                        />
                      </div>
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
                      <div key={answer.id} >
                        <CodeMirror 
                          value={answer} 
                          options={optionsForAnswers}
                        />
                      </div>
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

function mapStateToProps(state) {
  return {
    ownAnswers: state.matchResults.ownAnswers,
    opponentAnswers: state.matchResults.opponentAnswers
  }
}

export default connect(mapStateToProps)(GameWonPage);
