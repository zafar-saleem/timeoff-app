import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';

import HeaderComponent from '../../commons/headerComponent';

class HomeComponent extends Component {
  onChange(date) {
    console.log(date);
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Calendar
          onChange={this.onChange}
          selectRange={true}
        />
      </div>
    )
  }
}

export default HomeComponent;