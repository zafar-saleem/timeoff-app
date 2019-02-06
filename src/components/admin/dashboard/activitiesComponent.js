import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activityActions } from '../../../actions/dashboardActions';

class ActivitiesComponent extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(activityActions());
  }

  render() {
    if (this.props.activities.activities === undefined || this.props.activities.activities.length <= 0) {
      return <div>Loading...</div>
    }

    return (
      <div className='activities'>
        <h4>Recent Activities</h4>
        <ul>
          {this.props.activities.activities.map(activity => (
            <li key={activity._id} className='uppercase'>{activity.activity}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(ActivitiesComponent);
