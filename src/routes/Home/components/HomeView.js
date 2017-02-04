import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer'

export const HomeView = () => (
  <div id="homeViewContainer">
    <h4 style={{color:"#777"}}>Welcome!</h4>
    <div className="container-fluid">
      <div className="row">
        <MainLobbyContainer />
    	  <MatchHistory />
    	  <Leaderboard />
      </div>
      <div className="row">
        <Achievements />
      </div>
    </div>
  </div>
)

export default HomeView
