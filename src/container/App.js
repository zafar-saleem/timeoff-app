import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h3>User Authentication System</h3>
          </div>
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
