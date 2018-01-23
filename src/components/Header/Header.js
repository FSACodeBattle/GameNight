'use strict';
import axios from 'axios';
import React from 'react';
import { DropdownButton, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLink, Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Login from '../Login/Login';
import { fetchMatches } from '../../store/match'
import { setUser } from '../../store/user';
import { setRoomId } from '../../store/gamelobby';
import './Header.scss';
import ReactModal from 'react-modal';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    socket.on('gameReady', (data) => {
      this.props.setId(data);
    })
    socket.on('startGame', data => {
      this.setState({ showModal: false });
      browserHistory.push('/battlePage');
    })
  }

  handleOpenModal () {
     this.setState({ showModal: true });
     socket.emit('quickPlay');
   }

   handleCloseModal () {
     this.setState({ showModal: false });
   }

  logout() {
    this.props.logoutUser();
  }

  render() {
    const modalStyles = {
      overlay: {
        position: 'fixed',
        height: '475px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '5',
        width: '500px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
      },
      content: {
        color: 'white',
        border: '1px solid #ccc',
        background: '#000',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        padding: '0px',
        textAlign: 'center'
      }
    }
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/about" >
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/report-a-bug" >
              <NavItem eventKey={2}>Report a Bug</NavItem>
            </LinkContainer>
            <LinkContainer to={`/lobby/${makeid()}`} >
              <NavItem eventKey={4}>
                <button id="create-lobby" className="btn btn-primary btn-small" >Create Lobby</button>
              </NavItem>
            </LinkContainer>
            <NavItem eventKey={5}>
              <button id="quick-play" className="btn btn-primary btn-small" onClick={this.handleOpenModal}>Quick Play!</button>
            </NavItem>
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
        <ReactModal
          id="quick-play-modal"
          style={modalStyles}
          isOpen={this.state.showModal}
          contentLabel="Quick Game!"
          onRequestClose={this.handleCloseModal}>
            <h3>Searching For Game...</h3>
            <img
              alt='Ninja'
              className='ninja-modal'
              src='https://media.giphy.com/media/Z3bvJIYORDZde/giphy.gif'
            />
            <button className="btn btn-modal" onClick={this.handleCloseModal}>
              Quit Search
            </button>
        </ReactModal>
      </div>
    );
  }
}

function makeid() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; for(let i = 0; i < 6; i++ )
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
    },
    setId: function(id) {
        dispatch(setRoomId(id));
        socket.emit('joinGameLobby', id);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
