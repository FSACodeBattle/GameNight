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
      leaderboard: []
    }

  }
  componentDidMount(){
    axios.get('/api/users/leaderboard')
      .then((leaderboard) => {
        this.setState({leaderboard: leaderboard.data});
      })
  }

  render(){
    console.log("adasdfsaDSFSDF", this.state.leaderboard);
    return (
      <div>
        <img src="ninja.jpg" className="img" alt="Responsive image"/>
        <div className="container-fluid">
          <div className="row" id="introaboutcode">
            <h4 style={{color:"#777"}}>Welcome!</h4>
            <MainLobbyContainer />
          </div>
          <div className="row" id="matchAndLeaders">
            <MatchHistory />
            <div className="col-xs-12 col-md-4 col-lg-4">

            </div>
            <Leaderboard leaderboard={this.state.leaderboard}/>
          </div>
          <div className="row">
            <Achievements />
          </div>
        </div>
      </div>
      )
  }

}


export default HomeView;
