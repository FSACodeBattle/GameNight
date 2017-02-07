import React, { Component } from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="Mitch2.jpg" alt="john"/>
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About Mitch
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john" />
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About Patryk
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john" />
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About Ming
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john" />
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About John
        </div>
      </div>

    </div>
  );
}

export default About;
