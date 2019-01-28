import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';

import HeaderComponent from '../../commons/headerComponent';
import { setVacationActions } from '../../../actions/employeesActions';

class HomeComponent extends Component {
  state = {
    startDate: null,
    endDate: null
  }

  onSaveHandle(event) {
    event.preventDefault();

    let range = {
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    
    console.log(this.props);
    this.props.dispatch(setVacationActions(range));
  }

  onChange(date) {
    this.setState({
      startDate: date[0],
      endDate: date[1]
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <HeaderComponent />
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