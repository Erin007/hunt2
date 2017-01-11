import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
//import PageTwo from './PageTwo';

export default class HuntApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginForm" component={LoginForm} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}
