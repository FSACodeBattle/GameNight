import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import CoreLayout from '../layouts/CoreLayout';
import Home from './Home/components/HomeView';
import CounterRoute from './Counter/containers/CounterContainer';
import CodeEditor from './CodeEditor/components/CodeEditor';
import BattlePage from './BattlePage/containers/BattlePageContainer';
import InvitePage from './InvitePage/components/InvitePage';
import About from './About/About.js';
import JoinLobby from './JoinLobby/JoinLobby.jsx';
import GameLobbyContainer from './GameLobby/containers/GameLobbyContainer';
import GameWonPage from './GameWonPage/components/GameWonPage'
import GameFinishedPage from './GameFinishedPage/components/GameFinishedPage'
import Login from '../components/Login/Login';
import Signup from './Signup/components/Signup';
import Profile from './Profile/components/Profile';
import ReportABug from './ReportABug/components/ReportABug';

import { fetchClients } from '../store/client'
import { setRoomId } from '../store/gamelobby';
import { setUser } from '../store/user';
import { fetchMatches } from '../store/match';
import { fetchProfile } from '../store/profile';

function onJoinEnter(nextRouterState){
  //console.log(nextRouterState.params.invId);
  const lobbyID = nextRouterState.params.invId;
  console.log("this is client side socket",socket);
  socket.emit('joinGameLobby', lobbyID);
}

function onPageEnter(store) {
  store.dispatch(fetchClients());
  axios.get('/user')
  .then(loggedInUser => {
    const user = loggedInUser.data
    store.dispatch(setUser(user));
    store.dispatch(fetchMatches(user));
  })
}

function onGameLobbyEnter(store) {
  store.dispatch(fetchClients());
  axios.get('/user')
  .then(user => {
    store.dispatch(setUser(user.data))
  });
}

function onProfileEnter(nextRouterState, store) {
  const username = nextRouterState.params.username;
  store.dispatch(fetchProfile(username));
}

export const createRoutes = (store) => (
  <Route path="/" component={CoreLayout} onEnter={() => onPageEnter(store)}>
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="lobby/create" component={GameLobbyContainer}/>
    <Route path="lobby/join" component={JoinLobby} onEnter={() => onGameLobbyEnter(store)}/>
    <Route path="profile/:username" component={Profile} onEnter={(nextRouterState) => onProfileEnter(nextRouterState, store)}/>
    <Route path="invite" component={InvitePage} />
    <Route path="about" component={About} />
    <Route path="code_editor" component={CodeEditor} />
    <Route path="counter" component={CounterRoute} />
    <Route path="battlePage" component={BattlePage} />
    <Route path="joinGame/:invId" onEnter={onJoinEnter} component={BattlePage} />
    <Route path ="gameWon" component={GameWonPage} />
    <Route path ="gameFinished" component={GameFinishedPage} />
    <Route path ="report-a-bug" component={ReportABug} />
    <IndexRoute component={Home} />
  </Route>
)

export default createRoutes
