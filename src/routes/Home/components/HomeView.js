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
          <div className="container container-jumbotron">
            <div className="row row-homeview">
              <img src="CodeBattle.png" rel="codebattleimage" />
            </div>
          </div>
        </Jumbotron>
        <HomePage />
        <div className="row matchleader">
          <div className="col-xs-12 col-sm-6 col-md-6" id="matchhistoryboard"/*className="col-xs-12 col-sm-6 col-md-6 col-lg-6"*/>
            <div style={{background: "rgba(0,0,0,.2)", fontSize: "22px", color: "white"}}>Leader Board</div>
            <Leaderboard leaderboard={this.state.leaderboard}/>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6" id="leader"/*className="col-xs-12 col-sm-6 col-md-6 col-lg-6"*/>
          <div style={{background: "rgba(0,0,0,.2)", fontSize: "22px", color: "white"}}>Match History</div>
            <MatchHistory />
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
