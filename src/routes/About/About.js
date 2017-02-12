import React, { Component } from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="container" id="aboutContainer">
      <div className = "row" id="aboutRow">
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "MitchHeadShot.jpg" alt = "Mitch Image" style={{textAlign: "center"}} />
          </div>
          <div className = "caption">
            <h3>Mitch Kosowski</h3>
          </div>
        </div>
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "Patryk.jpg" alt = "Patryk Image" />
          </div>
          <div className = "caption">
            <h3>Patryk Chmura</h3>
          </div>
        </div>
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "Ming.jpg" alt = "Generic placeholder thumbnail" />
          </div>
          <div className = "caption">
            <h3>Ming Tung Wong</h3>
          </div>
        </div>
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "headshot_johnyom.jpg" alt = "Generic placeholder thumbnail" />
          </div>
          <div className = "caption">
            <h3>John Yom</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;


  // return (
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-xs-6 col-md-4">
  //         <a className="thumbnail">
  //           <img src="Mitch2.jpg" alt="john"/>
  //         </a>
  //       </div>
  //       <div className="col-xs-6 col-md-8">
  //         Hello, Info About Mitch
  //       </div>
  //     </div>

  //     <div className="row">
  //       <div className="col-xs-6 col-md-4">
  //         <a className="thumbnail">
  //           <img src="Patryk.jpg" alt="john" />
  //         </a>
  //       </div>
  //       <div className="col-xs-6 col-md-8">
  //         Hello, Info About Patryk
  //       </div>
  //     </div>

  //     <div className="row">
  //       <div className="col-xs-6 col-md-4">
  //         <a className="thumbnail">
  //           <img src="headshot_johnyom.jpg" alt="john" />
  //         </a>
  //       </div>
  //       <div className="col-xs-6 col-md-8">
  //         Hello, Info About Ming
  //       </div>
  //     </div>

  //     <div className="row">
  //       <div className="col-xs-6 col-md-4">
  //         <a className="thumbnail">
  //           <img src="headshot_johnyom.jpg" alt="john" />
  //         </a>
  //       </div>
  //       <div className="col-xs-6 col-md-8">
  //         Hello, Info About John
  //       </div>
  //     </div>

  //   </div>
  // );
