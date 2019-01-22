import React, { Component } from 'react';
import { connect } from 'react-redux';

import { countEmployeeActions } from '../../../actions/dashboardActions';

class CountEmployeesComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(countEmployeeActions());
  }

  render() {
    if (this.props.count.total === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{this.props.count.total}</h1>
        <p>Employees</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(CountEmployeesComponent);