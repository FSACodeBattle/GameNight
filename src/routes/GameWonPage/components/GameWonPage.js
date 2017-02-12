import React, { Component } from 'react';
import './GameWonPage.scss';

export const GameWonPage = () => {
  return (
    <div className="container" id="gameWonPage">
      <div className="row">
        <h1>Congratulations You Won!!</h1>
        <img
          alt='Fireworks!'
          className='fireworks'
          src='http://bestanimations.com/Holidays/Fireworks/fireworks/ba-large-white-firework-gif-pic.gif' />
      </div>
    </div>
  )
}

export default GameWonPage;

