import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginComponent from '../components/authentications/login/loginComponent';
import RegisterComponent from '../components/authentications/register/registerComponent';
import LogoutComponent from '../components/authentications/logoutComponent';
import DashboardComponent from '../components/admin/dashboard/dashboardComponent';

import HeaderComponent from '../components/commons/headerComponent';
import EmployeeComponent from '../components/admin/employees/employeesComponent';
import EmployeesListComponent from '../components/admin/list/employeesListComponent';
import EmployeeScheduleComponent from '../components/admin/schedule/employeeScheduleComponent';
import AddEmployeeComponent from '../components/admin/addEmployee/addEmployeeComponent';

import EmployeeDetailsComponent from '../components/employees/details/employeeDetailsComponent';
import EmployeeDetailsUpdateComponent from '../components/employees/details/employeeDetailsUpdateComponent';
import HomeComponent from '../components/employees/home/homeComponent';
import ProfileComponent from '../components/employees/profile/profileComponent';

import { getCookie } from '../utils/cookies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>
            TimeOff
          </h1>
          <Switch>
            <Route path='/' exact={true} component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/register' component={RegisterComponent} />
            <PrivateRoute path='/logout' component={LogoutComponent} />
            <PrivateRoute path='/admin/dashboard' component={DashboardComponent} />
            <PrivateRoute path='/admin/employee' component={EmployeeComponent} />
            <PrivateRoute path='/admin/list' component={EmployeesListComponent} />
            <PrivateRoute path='/admin/schedule' component={EmployeeScheduleComponent} />
            <PrivateRoute path='/admin/new' component={AddEmployeeComponent} />

            <PrivateRoute path='/employee/details/:id' component={EmployeeDetailsComponent} />
            <PrivateRoute path='/employee/update/:id' component={EmployeeDetailsUpdateComponent} />
            <PrivateRoute path='/employee/home' component={HomeComponent} />
            <PrivateRoute path='/employee/profile' component={ProfileComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
