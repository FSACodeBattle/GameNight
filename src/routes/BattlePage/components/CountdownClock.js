import React from 'react'
import ReactCountdownClock from 'react-countdown-clock'

export const CountdownClock = () => (
  <div>
  	<ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={50}
                     />
  </div>
)

export default CountdownClock;

// set callback function to clock via this option
// onComplete={myCallback}