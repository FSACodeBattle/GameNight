// 'use strict';

// import React, { Component } from 'react'
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'
// import { Provider, connect } from 'react-redux';
// import CoreLayout from './layouts/CoreLayout';
// import reactDom from 'react-dom';
// import Home from './routes/Home';
// import CodeEditor from './routes/CodeEditor';
// import store from './store/createStore';

// export default class Router extends Component {
//   return (
//     <Provider store={store}>
//       <Router history={browserHistory} routes={routes} >
//         <Route path="/" component={CoreLayout} />
//         <Route path="code_editor" component={CodeEditor} />
//       </Router>
//     </Provider>
//   )
// }
// 'use strict';

// import React from 'react';
// import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
// import { Provider } from 'react-redux';
// import store from './store';
// import Home from './routes/Home';
// import CodeEditor from './routes/CodeEditor';
// import store from './store/createStore';


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <IndexRedirect to="/albums"/>
        </Route>
      </Router>
    </Provider>
  );
}
