'use strict';
import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';
import Login from '../Login/Login';
import { connect } from 'react-redux';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    console.log('user', user);
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>

          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="about">About</Link></li>
              <li><Link to="battlePage">Battle Page</Link></li>
              <li><Link to="code_editor">Code Editor</Link></li>
              <li><Link to="/invite" activeClassName="route--active">Invite</Link></li>
              <li><Link to={`/lobby/${makeid()}`} >Create Lobby</Link></li>
            </ul>
            {
              Object.keys(user).length
              ? <div className="loginComponent"><Link to={`/profile/${user.username}`}><button>{user.username}</button></Link></div>
              : <Login />
            }
          </div>
        </div>
      </nav>
    )
  }
}

function makeid() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}





const mapStateToProps = (state) => {
  return {user: state.user.user};
}

export default connect(mapStateToProps)(Header);
