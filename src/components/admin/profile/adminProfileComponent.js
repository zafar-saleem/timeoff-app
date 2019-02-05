import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { adminProfileAction } from '../../../actions/adminActions';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/cookies';
import AdminProfileView from './adminProfileView';

class AdminProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(adminProfileAction({
      id: getCookie('id'),
      access: getCookie('role')
    }));
  }

  render() {
    if (this.props.profile.action === undefined) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <HeaderComponent />
        <AdminProfileView profile={this.props.profile.action.response} />
      </div>
    );
  }
}

const mapStateToPrope = (state) => (state);

export default connect(mapStateToPrope)(AdminProfileComponent);