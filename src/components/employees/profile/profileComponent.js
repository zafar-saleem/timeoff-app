import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeDetailsAction } from '../../../actions/employeesActions';
import HeaderComponent from '../../commons/headerComponent';
import ProfileView from './profileView';
import { getCookie } from '../../../utils/cookies';

class ProfileComponent extends Component {
  state = {
    employee: null
  }

  componentDidMount() {
    const data = {
      employeeID: getCookie('id'),
      admin: {
        id: getCookie('id'),
        access: getCookie('role')
      }
    };

    this.props.dispatch(employeeDetailsAction(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.details.hasOwnProperty('response')) {
      return {
        employee: nextProps.details.response
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.props.details.response === undefined) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <HeaderComponent />
        <ProfileView employee={this.props.details.response} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(ProfileComponent);