import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john"/>
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About Mitch
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john"/>
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About Patryck
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john"/>
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About Ming
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-4">
          <a className="thumbnail">
            <img src="headshot_johnyom.jpg" alt="john"/>
          </a>
        </div>
        <div className="col-xs-6 col-md-8">
          Hello, Info About John
        </div>
      </div>

    </div>
  )
  }
};

export default About;
