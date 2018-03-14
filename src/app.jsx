//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';

import Landing from 'components/Pages/Landing';
import Authenticate from 'components/Pages/Authenticate';
import SignOut from 'components/Pages/SignOut';
import Download from 'components/Pages/Download';

type Props = {
  history?: Object,
};

class App extends Component<Props>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    const { history } = this.props;
    const store = createStore(routerReducer, applyMiddleware(routerMiddleware(history)));
    const ConnectedSwitch = connect(state => ({ location: state.location }))(Switch);

    return (
      <Provider store={store}>
        <ConnectedRouter history={history ? history : createBrowserHistory()}>
          <ConnectedSwitch>
            <Route exact path='/' component={Landing} />
            <Route path='/authenticate' component={Authenticate} />
            <Route path='/sign-out' component={SignOut} />
            <Route path='/download' component={Download} />
          </ConnectedSwitch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
