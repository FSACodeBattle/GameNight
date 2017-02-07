import React from 'react';
import './HomeView.scss';
import MatchHistory from './MatchHistory';
import Achievements from './Achievements';
import Leaderboard from './Leaderboard';
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer';

export const HomeView = () => (
  <div>
    <div className="container-fluid">
      <div className="row" id="introaboutcode">
        <h4 style={{color:"#777"}}>Welcome!</h4>
        <MainLobbyContainer />
      </div>
      <div className="row" id="matchAndLeaders">
        <MatchHistory />
        <Leaderboard />
        <Achievements />
      </div>
    </div>
  </div>
)

export default HomeView;
