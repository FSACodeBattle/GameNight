'use strict';
import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import Login from '../Login/Login';

export const Header = (props) => (

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Home</Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="battlePage">Battle Page</Link></li>
          <li><Link to="code_editor">Code Editor</Link></li>
          <li><Link to="/invite" activeClassName="route--active">Invite</Link></li>
          <li><Link to={`/lobby/${makeid()}`} >Create Lobby</Link></li>
        </ul>
        {/* <form className="navbar-form navbar-left search" id="login">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form> */}
        <Login props={props} />
      </div>
    </div>
  </nav>
);

function makeid() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

export default Header;
