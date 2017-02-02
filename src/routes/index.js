import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout';
import Home from './Home/components/HomeView';
import CounterRoute from './Counter/containers/CounterContainer';
import CodeEditor from './CodeEditor/components/CodeEditor';
import BattlePage from './BattlePage/containers/BattlePageContainer';
import InvitePage from './InvitePage/components/InvitePage';

import { fetchClients } from '../store/client'

function onJoinEnter(nextRouterState){
  //console.log(nextRouterState.params.invId);
  const lobbyID = nextRouterState.params.invId;
  console.log("this is client side socket",socket);
  socket.emit('joinGameLobby', lobbyID);
}

function onPageEnter(store) {
  store.dispatch(fetchClients());
}

export const createRoutes = (store) => (
  <Route path="/" component={CoreLayout} onEnter={() => onPageEnter(store)}>
    <Route path="invite" component={InvitePage} />
    <Route path="code_editor" component={CodeEditor} />
    <Route path="counter" component={CounterRoute} />
    <Route path="battlePage" component={BattlePage} />
    <Route path="joinGame/:invId" onEnter={onJoinEnter} component={BattlePage} />
    <IndexRoute component={Home} />
  </Route>
)

export default createRoutes
