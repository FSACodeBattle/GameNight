import React, { Component } from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="container" id="aboutContainer">
      <div className = "row">
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "Mitch2.jpg" alt = "Mitch Image" style={{textAlign: "center"}}/>
          </div>
          <div className = "caption">
            <h3>Mitch</h3>
            <p>LinkedIn</p>
            <p>
              <a href = "#" className = "btn btn-primary" role = "button">
                   Button
              </a>
              <a href = "#" className = "btn btn-default" role = "button">
                   Button
              </a>
            </p>
          </div>
        </div>
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "Patryk.jpg" alt = "Patryk Image" />
          </div>
          <div className = "caption">
            <h3>Patryk</h3>
            <p>Some sample text. Some sample text.</p>
            <p>
              <a href = "#" className = "btn btn-primary" role = "button">
                   Button
              </a>
              <a href = "#" className = "btn btn-default" role = "button">
                   Button
              </a>
            </p>
          </div>
        </div>
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "/bootstrap/images/kittens.jpg" alt = "Generic placeholder thumbnail" />
          </div>
          <div className = "caption">
            <h3>Ming</h3>
            <p>LinkedIn Github</p>
            <p>
              <a href = "#" className = "btn btn-primary" role = "button">
                 Button
              </a>
              <a href = "#" className = "btn btn-default" role =" button">
                 Button
              </a>
              </p>
          </div>
        </div>
        <div className = "col-sm-6 col-md-3 col-lg-3">
          <div className = "thumbnail">
            <img src = "headshot_johnyom.jpg" alt = "Generic placeholder thumbnail" />
          </div>
          <div className = "caption">
            <h3>John Yom</h3>
            <p>Some sample text. Some sample text.</p>
            <p>
              <a href = "#" className = "btn btn-primary" role = "button">
                 Button
              </a>
              <a href = "#" className = "btn btn-default" role = "button">
                 Button
              </a>
            </p>
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
