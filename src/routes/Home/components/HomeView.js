import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import MatchHistory from './MatchHistory'
import Achievements from './Achievements'
import Leaderboard from './Leaderboard'
import MainLobbyContainer from '../../MainLobbyList/containers/MainLobbyContainer'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
      <MainLobbyContainer />
    	<MatchHistory />
    	<Achievements />
    	<Leaderboard />
  </div>
)

export default HomeView
