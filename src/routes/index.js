import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../container/App';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import DashboardPage from '../components/dashboardPage';

function isLoggedIn() {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}

function isUserAuthenticated(nextState, replace) {
  console.log(isLoggedIn());
  if (isLoggedIn()) {
    replace({
      pathname: '/dashboard'
    });
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LoginPage} onEnter={isUserAuthenticated} />
    <Route path='login' component={LoginPage} onEnter={isUserAuthenticated} />
    <Route path='register' component={RegisterPage} onEnter={isUserAuthenticated} />
    <Route path='dashboard' component={DashboardPage} onEnter={requireAuth} />
  </Route>
);