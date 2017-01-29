import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home/components/HomeView';
import CounterRoute from './Counter/containers/CounterContainer';
import CodeEditor from './CodeEditor/components/CodeEditor';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */


export const createRoutes = (store) => (
        <Route path="/" component={CoreLayout} >
          <Route path="code_editor" component={CodeEditor} />
          <Route path="counter" component={CounterRoute} />
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







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~WORKING FIXED ROUTES
// We only need to import the modules necessary for initial render
// import React, { Component } from 'react';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { Provider, connect } from 'react-redux';
// import CoreLayout from '../layouts/CoreLayout'
// import Home from './Home/components/HomeView.js';
// import CounterRoute from './Counter'
// import CodeEditor from './CodeEditor/components/CodeEditor';

// /*  Note: Instead of using JSX, we recommend using react-router
//     PlainRoute objects to build route definitions.   */


// export const createRoutes = (store) => (
//         <Route path="/" component={CoreLayout} >
//           <Route path="code_editor" component={CodeEditor} />
//           <IndexRoute component={Home}/>
//         </Route>
// )

// /*  Note: childRoutes can be chunked or otherwise loaded programmatically
//     using getChildRoutes with the following signature:

//     getChildRoutes (location, cb) {
//       require.ensure([], (require) => {
//         cb(null, [
//           // Remove imports!
//           require('./Counter').default(store)
//         ])
//       })
//     }

//     However, this is not necessary for code-splitting! It simply provides
//     an API for async route definitions. Your code splitting should occur
//     inside the route `getComponent` function, since it is only invoked
//     when the route exists and matches.
// */

// export default createRoutes
