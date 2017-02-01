import React, { Component } from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout';
import Home from '../routes/Home';
import CodeEditor from '../routes/CodeEditor';


class AppContainer extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  render () {
    //console.log("this is io", socket);
    const { store, routes } = this.props;

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    );
  }
}

export default AppContainer;

