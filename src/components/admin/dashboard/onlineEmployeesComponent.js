import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onlineEmployeesAction } from '../../../actions/dashboardActions';

class OnlineEmployeesComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(onlineEmployeesAction());
  }

  render() {
    return (
      <div>
        <h1>{this.props.online.online}</h1>
        <p>Employees Online</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(OnlineEmployeesComponent);
