import React from 'react'
import DuckImage from '../assets/Duck.jpg'
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

export default HomeView
{/*
<div class="intro-header">
    <div class="container">

        <div class="row">
            <div class="col-lg-12">
                <div class="intro-message">
                    <h1>Landing Page</h1>
                    <h3>A Template by Start Bootstrap</h3>
                    <hr class="intro-divider">
                    <ul class="list-inline intro-social-buttons">
                        <li>
                            <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <!-- /.container -->

</div>
*/}
