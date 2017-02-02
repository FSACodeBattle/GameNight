import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'

export const HomeView = () => (
  <div id="homeViewContainer">
    <h4>Welcome!</h4>
    <div className="container-fluid">
      <div className="row">
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
