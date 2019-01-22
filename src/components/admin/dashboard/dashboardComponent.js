import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from '../../commons/headerComponent';
import CountEmployeesComponent from './countEmployeesComponent';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <CountEmployeesComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(DashboardComponent);
