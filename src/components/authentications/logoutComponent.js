import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie, setCookie } from '../../utils/cookies';
import { connect } from 'react-redux';

import { logoutAction } from '../../actions/authenticationActions';

class LogoutComponent extends Component {
  constructor(props) {
    super(props);
    
    this.props.dispatch(logoutAction({id: getCookie('id'), access: getCookie('role')}));

    setCookie('token', getCookie('token'), 0);
    setCookie('role', getCookie('role'), 0);
    setCookie('id', getCookie('role'), 0);
  }

  render() {
    if (getCookie('token') == null || getCookie('token') == '') {
      return <Redirect to='/' />;
    }
    
    return <Redirect to='/admin/dashboard' />
  }
}

export default connect()(LogoutComponent);
