import React, { Component } from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout';
import Home from '../routes/Home';
import CodeEditor from '../routes/CodeEditor';

class AppContainer extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store, routes } = this.props;
    console.log('~~~~~~~~~~~~~~~~STATE', this.state)
    console.log('~~~~~~~~~~~~~~~~props', this.props)

    return (
      <Provider store={store} >
        <Router history={browserHistory} routes={routes} >
          <Route path="/" component={CoreLayout} />
          <Route path="code_editor" component={CodeEditor} />
        </Router>
      </Provider>
    );
  }
}

// function mapStateToProps(state){
//   return state
// }

export default AppContainer;
