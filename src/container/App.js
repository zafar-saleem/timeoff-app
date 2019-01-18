import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginComponent from '../components/loginComponent';
import LogoutComponent from '../components/logoutComponent';
import RegisterComponent from '../components/registerComponent';
import DashboardComponent from '../components/admin/dashboardComponent';

import HeaderComponent from '../components/commons/headerComponent';
import EmployeeComponent from '../components/admin/employeesComponent';
import EmployeesListComponent from '../components/admin/employeesListComponent';
import EmployeeScheduleComponent from '../components/admin/employeeScheduleComponent';
import addEmployeeComponent from '../components/admin/addEmployeeComponent';

import { checkCookie } from '../utils/cookies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <h3>Welcome to TimeOff</h3>
          </div>
          <Switch>
            <Route path='/' exact={true} component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/register' component={RegisterComponent} />
            <PrivateRoute path='/logout' component={LogoutComponent} />
            <PrivateRoute path='/admin/dashboard' component={DashboardComponent} />
            <PrivateRoute path='/admin/employee' component={EmployeeComponent} />
            <PrivateRoute path='/admin/list' component={EmployeesListComponent} />
            <PrivateRoute path='/admin/schedule' component={EmployeeScheduleComponent} />
            <PrivateRoute path='/admin/new' component={addEmployeeComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
