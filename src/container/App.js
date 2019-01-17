import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginComponent from '../components/loginComponent';
import RegisterComponent from '../components/registerComponent';
import DashboardComponent from '../components/admin/dashboardComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h3>Welcome to System</h3>
          </div>
          <Switch>
            <Route path='/' exact={true} component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/register' component={RegisterComponent} />
            <PrivateRoute path='/dashboard' component={DashboardComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
