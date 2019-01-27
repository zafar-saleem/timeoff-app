import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from '../../commons/headerComponent';
import CountEmployeesComponent from './countEmployeesComponent';
import OnlineEmployeesComponent from './onlineEmployeesComponent';
import ActivitiesComponent from './activitiesComponent';

import { getCookie } from '../../../utils/cookies';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        {(getCookie('role') === 'Admin')
        ?
        <div>
          <CountEmployeesComponent />
          <OnlineEmployeesComponent />
          <ActivitiesComponent />
        </div>
        :
        <div><Redirect to='/employee/home' /></div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(DashboardComponent);
