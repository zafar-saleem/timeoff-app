import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import HeaderComponent from '../components/commons/headerComponent';
import DashboardComponent from '../components/admin/dashboardComponent';
import EmployeeComponent from '../components/admin/employeesComponent';
import EmployeesListComponent from '../components/admin/employeesListComponent';
import EmployeeScheduleComponent from '../components/admin/employeeScheduleComponent';
import LogoutComponent from '../components/logoutComponent';

class DashboardContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <HeaderComponent />
          </div>
          <Switch>
            <PrivateRoute path='/dashboard' component={DashboardComponent} />
            <PrivateRoute path='/dashboard/list' component={EmployeesListComponent} />
            <PrivateRoute path='/dashboard/employee' component={EmployeeComponent} />
            <Route path='/logout' component={LogoutComponent} />
            <PrivateRoute path='/dashboard/schedule' component={EmployeeScheduleComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default DashboardContainer;
