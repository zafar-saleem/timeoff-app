import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LoginComponent from '../components/loginComponent';
import RegisterComponent from '../components/registerComponent';
import DashboardComponent from '../components/dashboardComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h3>User Authentication System</h3>
          </div>
          <Switch>
            <Route path='/' exact={true} component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/register' component={RegisterComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
