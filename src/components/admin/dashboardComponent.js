import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        Dashboard
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}

export default connect()(DashboardComponent);
