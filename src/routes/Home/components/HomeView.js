import React from 'react'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer';

export const HomeView = () => (
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
        <Leaderboard />
      </div>
      <div className="row">
        <Achievements />
      </div>
    </div>
  </div>
)

export default HomeView;
