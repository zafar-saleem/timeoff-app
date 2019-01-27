import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderComponent from '../../commons/headerComponent';

class ProfileComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        Profile
      </div>
    )
  }
}

export default ProfileComponent;