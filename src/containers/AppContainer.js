import React, { Component } from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider, connect } from 'react-redux';
import CoreLayout from '../layouts/CoreLayout';
import Home from '../routes/Home';
import CodeEditor from '../routes/CodeEditor';
import BattlePage from '../routes/BattlePage/containers/BattlePageContainer.jsx'
import { fetchClients } from '../store/client';


class AppContainer extends Component {
  constructor(props){
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  render () {
    const { store, routes } = this.props;

    socket.on('reload', () => {
      store.dispatch(fetchClients())
    });

    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
