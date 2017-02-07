'use strict';
import axios from 'axios';
import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import { setUser } from '../../store/user';
import './Header.scss';



class Header extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutUser();
  }

  render() {
    const user = this.props.user;
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
              ?
              (
                <div className="pull-right AccountDropdown">
                  <DropdownButton pullRight={true} title={user.name.split(' ')[0]} >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >Settings</MenuItem>
                    <MenuItem onSelect={this.logout}>Logout</MenuItem>
                  </DropdownButton>
                </div>
              )
              : <div className="pull-right AccountDropdown"><Login /></div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: function() {
      axios.get('/signout')
      .then(() => dispatch(setUser({})));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
