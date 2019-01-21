import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from '../../commons/headerComponent';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
      </div>
    );
  }
}

export default connect()(DashboardComponent);
