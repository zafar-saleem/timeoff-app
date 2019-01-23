import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from '../../commons/headerComponent';
import CountEmployeesComponent from './countEmployeesComponent';
import OnlineEmployeesComponent from './onlineEmployeesComponent';
import ActivitiesComponent from './activitiesComponent';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <CountEmployeesComponent />
        <OnlineEmployeesComponent />
        <ActivitiesComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(DashboardComponent);
