
import React , {Component} from 'react'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'

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
        <div className="container-fluid">
          <div className="row" id="introaboutcode">
            <h4 style={{color:"#777"}}>Welcome!</h4>
            <MainLobbyContainer />
          </div>
          <div className="row" id="matchAndLeaders">
            <MatchHistory matches={this.state.matches}/>
            <Leaderboard leaderboard={this.state.leaderboard}/>
            <Achievements />
          </div>
        </div>
      </div>
    );
  }
}


export default HomeView;
