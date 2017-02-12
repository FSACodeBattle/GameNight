import React, {Component} from 'react';
import './HomeView.scss';
import MatchHistory from './MatchHistory';
import Achievements from './Achievements';
import Leaderboard from './Leaderboard';
import { Jumbotron } from 'react-bootstrap';
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer';
import axios from 'axios';
import HomePage from './homePage';

class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      leaderboard: []
    }
  }

  componentDidMount(){
    axios.get('/api/users/leaderboard')
    .then(leaderboard => this.setState({leaderboard: leaderboard.data}));
  }

  render(){
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <p><span>Code Battle</span></p>
            </div>
          </div>
        </Jumbotron>
        <HomePage />

          {/*<div className="row" id="introaboutcode">
            <h4 style={{color:"#777"}}>Welcome!</h4>
          </div>
        */}
          <div className="row" id="matchAndLeaders">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <MatchHistory />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Leaderboard leaderboard={this.state.leaderboard}/>
            </div>
            {/*<Achievements />*/}
          </div>
            {/* <div style={{paddingTop: "10px"}}>
              <MainLobbyContainer />
            </div> */}
        </div>

    );
  }
}

export default HomeView;


