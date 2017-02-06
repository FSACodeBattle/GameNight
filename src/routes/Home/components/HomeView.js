import React from 'react'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer';

export const HomeView = () => (
  <div className="intro-header">
    <img src="ninja.jpg" className="img-fluid" alt="Responsive image"/>
    <div className="container">
      <div className="row" id="introaboutcode">
        <h4 style={{color:"#777"}}>Welcome!</h4>
      <div className="container-fluid">
        <div className="row-fluid">
          <MainLobbyContainer />
        </div>
        <div className="row" id="matchAndLeaders">
          <MatchHistory />
          <Leaderboard />
        </div>
        <div className="row">
          <Achievements />
        </div>
      </div>
      </div>
    </div>
  </div>
)

export default HomeView;
