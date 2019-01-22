import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from '../../commons/headerComponent';
import CountEmployeesComponent from './countEmployeesComponent';
import OnlineEmployeesComponent from './onlineEmployeesComponent';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <CountEmployeesComponent />
        <OnlineEmployeesComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(DashboardComponent);
