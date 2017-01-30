import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    	<MatchHistory />
    	<Achievements />
    	<Leaderboard />
  </div>
)

export default HomeView
