import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';

import HeaderComponent from '../../commons/headerComponent';
import { setVacationActions } from '../../../actions/employeesActions';

class HomeComponent extends Component {
  state = {
    startDate: null,
    endDate: null,
    isSuccess: false,
    message: ''
  }

  onSaveHandle(event) {
    event.preventDefault();

    let range = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    this.props.dispatch(setVacationActions(range));
  }

  onChange(date) {
    let today = new Date();

    if (date[0] > today) {
      this.setState({
        startDate: date[0],
        endDate: date[1]
      });

      return;
    }

    this.setState({
      isSuccess: false,
      message: 'Please select date in future.'
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.vacations.hasOwnProperty('response')) {
      if (nextProps.vacations.response.success !== prevState.isSuccess) {
        return {
          isSuccess: nextProps.vacations.response.success,
          message: nextProps.vacations.response.message,
          employee: nextProps.details.response
        };
      } else {
        return {
          isSuccess: nextProps.vacations.response.success,
          message: nextProps.vacations.response.message
        };
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <div>
          {
            (this.state.isSuccess)
            ?
            <div>{this.state.message}</div>
            :
            <div>{this.state.message}</div>
          }
        </div>
        <Calendar
          onChange={this.onChange.bind(this)}
          selectRange={true}
        />
        <button type='button' onClick={this.onSaveHandle.bind(this)}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(HomeComponent);