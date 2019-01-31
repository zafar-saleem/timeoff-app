import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteVacationAction } from '../../../actions/employeesActions';

import { getCookie } from '../../../utils/cookies';

class HomeView extends Component {

  render() {
    return (
      <div>
        {
          <div>
            {this.props.vacation.start} - {this.props.vacation.end}
            <Link to='' onClick={this.props.handleDelete.bind(this, this.props.vacation._id)}>Delete</Link>
          </div>
        }
      </div>
    )
  }
}

export default connect()(HomeView);