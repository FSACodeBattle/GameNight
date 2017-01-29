'use strict';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import { updateLocation } from './location';
import createLogger from 'redux-logger';

const store = createStore(rootReducer, global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(createLogger(), thunkMiddleWare))

export default store;


// export default (initialState = {}) => {
//   // ======================================================
//   // Middleware Configuration
//   // ======================================================
//   const middleware = [thunk, createLogger()]

//   // ======================================================
//   // Store Enhancers
//   // ======================================================
//   const enhancers = []

//   let composeEnhancers = compose

//   if (__DEV__) {
//     const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     if (typeof composeWithDevToolsExtension === 'function') {
//       composeEnhancers = composeWithDevToolsExtension
//     }
//   }

//   // ======================================================
//   // Store Instantiation and HMR Setup
//   // ======================================================
//   const store = createStore(
//     rootReducer(),
//     initialState,
//     composeEnhancers(
//       applyMiddleware(...middleware),
//       ...enhancers
//     )
//   )
//   store.asyncReducers = {}

//   // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
//   store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       const reducers = require('./reducers').default
//       store.replaceReducer(reducers(store.asyncReducers))
//     })
//   }

//   return store
// }
