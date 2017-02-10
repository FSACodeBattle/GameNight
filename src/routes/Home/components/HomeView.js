import React, {Component} from 'react';
import './HomeView.scss';
import MatchHistory from './MatchHistory';
import Achievements from './Achievements';
import Leaderboard from './Leaderboard';
import { Jumbotron } from 'react-bootstrap';
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer';
import axios from 'axios';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      leaderboard: [],
      matches: []
    }

  }
  componentDidMount(){
    axios.get('/api/users/leaderboard')
      .then((leaderboard) => {
        this.setState({leaderboard: leaderboard.data});
      })


    axios.get('/api/users/allMatches')
      .then((matches) => {
        this.setState({matches: matches.data})
      })
  }
  render(){
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <p>CODE BATTLE</p>
              <p>Begin your journey towards becoming a coding master!</p>
            </div>
          </div>
        </Jumbotron>
        <div className="row row-code-battle">
          <div className="col-xs-12 col-md-6">
            <h3>
              PUT SOME IMAGE HERE??
            </h3>
          </div>
          <div className="col-xs-12 col-md-6">
            <h3>
              CodeBattle
            </h3>
            <p>
             Want to learn coding fundamentals while having fun? <br/>Challenge your friends to a CodeBattle! Win to earn points <br/> Unlock achievements as you learn the basics of JavaScript. CodeBattle is designed to prepare students for success in the rigorous Fullstack Code Academy program.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row" id="introaboutcode">
            <h4 style={{color:"#777"}}>Welcome!</h4>
          </div>
          <div className="row" id="matchAndLeaders">
            <MatchHistory matches={this.state.matches}/>
            <Leaderboard leaderboard={this.state.leaderboard}/>
            <Achievements />
          </div>
            {/* <div style={{paddingTop: "10px"}}>
              <MainLobbyContainer />
            </div> */}
        </div>
      </div>
    );
  }
}


export default HomeView;
