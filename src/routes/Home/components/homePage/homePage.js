'use strict';
import React from 'react';
import './homePage.scss';

const HomePage = () => (
  <div>
    <div className="row row-code-battle">
      <div className="col-xs-12 col-md-6">
        <img src="http://cdn.thedailybeast.com/content/dailybeast/articles/2013/12/12/i-took-the-one-hour-of-code-challenge/jcr:content/image.crop.800.500.jpg/46228811.cached.jpg" className="img-cirlce" rel="soloCodingPic"/>
      </div>
      <div className="col-xs-12 col-md-6">
        <h3>
          CodeBattle
        </h3>
        <p>
         Challenge your friends to a CodeBattle! <br />Learn coding fundamentals in a fun competitive environment <br/> Win to earn points and advance up the Leaderboard <br /> CodeBattle is designed to prepare students for success in the rigorous Fullstack Code Academy program.
        </p>
      </div>
    </div>
    <div className="row row-code-battle2">
      <div className="col-xs-12 col-md-6" id="quickPlay">
        <h3>
          Lobby Or Quick Play
        </h3>
        <p>
         Challenge friends with a direct link invite <br /> or join a quick match game to get paired against a random player
        </p>
      </div>
      <div className="col-xs-12 col-md-6">
        <img src="quickPlay.png" className="img-quickplay" rel="pic of quickPlay" />
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
