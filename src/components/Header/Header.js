'use strict';
import axios from 'axios';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { DropdownButton, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink, Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import { setUser } from '../../store/user';
import { fetchMatches } from '../../store/match';
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
      <Navbar inverse collapseOnSelect fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to="/about">About</Link></NavItem>
            <NavItem eventKey={2}><Link to="/battlePage">Battle Page</Link></NavItem>
            <NavItem eventKey={3}><Link to="/code_editor">Code Editor</Link></NavItem>
            <NavItem eventKey={4}><Link to={`/lobby/${makeid()}`}>Create Lobby</Link></NavItem>
          </Nav>
          {
            Object.keys(user).length
            ?
            (
              <div className="pull-right AccountDropdown">
                <DropdownButton id={`dropdown-basic-1`} pullRight={true} title={user.name.split(' ')[0]} >
                  <MenuItem onSelect={() => browserHistory.push(`/profile/${user.username}`)}>Profile</MenuItem>
                  <MenuItem >Settings</MenuItem>
                  <MenuItem onSelect={this.logout}>Logout</MenuItem>
                </DropdownButton>
              </div>
            )
            : <div className="pull-right AccountDropdown"><Login /></div>
          }
        </Navbar.Collapse>
      </Navbar>
    );
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
      axios.get('/signout').then(() => {
        dispatch(setUser({}));
        dispatch(fetchMatches(null));
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

  // return (
  //   <nav className="navbar navbar-default">
  //     <div className="container-fluid">
  //       <div className="navbar-header">
  //         <Link className="navbar-brand" to="/">Home</Link>
  //       </div>
  //       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  //         <ul className="nav navbar-nav">
  //           <li className="active"><Link to="about">About</Link></li>
  //           <li><Link to="battlePage">Battle Page</Link></li>
  //           <li><Link to="code_editor">Code Editor</Link></li>
  //           <li><Link to="/invite" activeClassName="route--active">Invite</Link></li>
  //           <li><Link to={`/lobby/${makeid()}`} >Create Lobby</Link></li>
  //         </ul>
  //         {
  //           Object.keys(user).length
  //           ?
  //           (
  //             <div className="pull-right AccountDropdown">
  //               <DropdownButton id={`dropdown-basic-1`} pullRight={true} title={user.name.split(' ')[0]} >
  //                 <MenuItem onSelect={() => browserHistory.push(`/profile/${user.username}`)}>Profile</MenuItem>
  //                 <MenuItem >Settings</MenuItem>
  //                 <MenuItem onSelect={this.logout}>Logout</MenuItem>
  //               </DropdownButton>
  //             </div>
  //           )
  //           : <div className="pull-right AccountDropdown"><Login /></div>
  //         }
  //       </div>
  //     </div>
  //   </nav>
  // )
