'use strict';
import React from 'react';
import './homePage.scss';
import Logo from '../../assets/Logo.png'
import NinjaBowing from '../../assets/ninja_bowing.jpg'
import NinjaAttack from '../../assets/ninja_attack.png'

const HomePage = () => (
  <div>
    <div className="row row-code-battle">
      <div className="col-xs-12 col-md-6">
        <img 
          src={Logo} 
          style={
            {
              resizeMode: 'contain'
            }
          }
        />
      </div>
      <div className="col-xs-12 col-md-6">
        <h3>
          Code Battle
        </h3>
        <p>
         Challenge your friends to a Code Battle! Compete to see who can solve programming challenges the fastest in a competitive environment. Win to earn points and advance up the Leaderboard.<br /><br />CodeBattle is designed with questions related to coding fundatmentals chosen to prepare students for success in the rigorous <br /> Fullstack Code Academy program.
        </p>
      </div>
    </div>
    <div className="row row-code-battle2">
      <div className="col-xs-12 col-md-6" id="quickPlay">
        <h3>
          Quick Play or Create a Lobby
        </h3>
        <p>
         Want to get right into a match? Sign up or log in and select "Quick Play" and you will be matched with the first user available. Good luck!<br /> <br /> Want to challenge a friend? Sign up or log in and select "Create a Lobby" and send the link to your friend. When they join you will hop right into a Code Battle!
        </p>
      </div>
      <div className="col-xs-12 col-md-6">
        <img src="quickPlay.png" className="img-quickplay" rel="pic of quickPlay" />
      </div>
    </div>
    <div className="row row-code-battle3">
      <div className="col-xs-12 col-md-6">
        <img 
          src={NinjaBowing} 
          style={
            {
              height: 300,
              width: 174
            }
          }
        />
      </div>
      <div className="col-xs-12 col-md-6">
        <h3>
          Review Code
        </h3>
        <p>
          After the battle, both players will have a chance to review their own code as well as see what their opponent submitted. <br /> <br />If you lost the Code Battle, review your opponent's methods to learn them and be more prepared for the next battle. <br /> <br />If you won, you can review your opponent's code to help them improve.
        </p>
      </div>
    </div>
    <div className="row row-code-battle4">
      <div className="col-xs-12 col-md-6" id="quickPlay">
        <h3>
          Send Attacks!
        </h3>
        <p>
          Is your opponent advancing too quickly through the Code Battle? Unleash a devastating attack to block their progress and disrupt their rhythm. <br /> <br />More powerful attacks are currently in the works!
        </p>
      </div>
      <div className="col-xs-12 col-md-6">
        <img src={NinjaAttack} 
        style={
            {
              height: 300,
              width: 231
            }
          }/>
      </div>
    </div>
    {/*<div className="row row-code-battle">
      <div className="col-xs-12 col-md-6">
        <h3>
          PUT SOME IMAGE HERE??
        </h3>
      </div>
      <div className="col-xs-12 col-md-6">
        <h3>
          CodeBattle
        </h3>
        <p>
         Want to learn coding fundamentals while having fun? <br /> Challenge your friends to a CodeBattle! Win to earn points <br /> Unlock achievements as you learn the basics of JavaScript. CodeBattle is designed to prepare students for success in the rigorous Fullstack Code Academy program.
        </p>
      </div>
    </div>*/}
  </div>
)
export default HomePage;
