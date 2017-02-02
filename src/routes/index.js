import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout';
import Home from './Home/components/HomeView';
import CounterRoute from './Counter/containers/CounterContainer';
import CodeEditor from './CodeEditor/components/CodeEditor';
import BattlePage from './BattlePage/containers/BattlePageContainer';
import InvitePage from './InvitePage/components/InvitePage';


function onJoinEnter(nextRouterState){
  //console.log(nextRouterState.params.invId);
  const lobbyID = nextRouterState.params.invId;
  console.log("this is client side socket",socket);
  socket.emit('joinGameLobby', lobbyID);


}

export const createRoutes = (store) => (
  <Route path="/" component={CoreLayout} >
    <Route path="invite" component={InvitePage} />
    <Route path="code_editor" component={CodeEditor} />
    <Route path="counter" component={CounterRoute} />
    <Route path="battlePage" component={BattlePage} />
    <Route path="joinGame/:invId" onEnter={onJoinEnter} component={BattlePage} />
    <IndexRoute component={Home}/>
  </Route>
)

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes

// import Home from './Home'
// import CounterRoute from './Counter'
// import CodeEditor from './CodeEditor'
// import BattlePage from './BattlePage'

// /*  Note: Instead of using JSX, we recommend using react-router
//     PlainRoute objects to build route definitions.   */

// export const createRoutes = (store) => ([{
//   path        : '/',
//   component   : CoreLayout,
//   indexRoute  : Home,
//   childRoutes : [
//     CounterRoute(store)
//   ]
// }, {
//   path        : '/code_editor',
//   component   : CoreLayout,
//   indexRoute  : CodeEditor,
//   childRoutes : [
//     CounterRoute(store),
//   ]
// },

// {
//   path        : '/battlePage',
//   component   : CoreLayout,
//   indexRoute  : BattlePage,
//   childRoutes : [
//     CounterRoute(store),
//   ]
// }
// ])
