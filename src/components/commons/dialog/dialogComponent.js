import React, { Component } from 'react';
import { connect } from 'react-redux';

import './dialog.css';

class DialogComponent extends Component {
  render() {
    return (
      <div className={(this.props.warning) ? 'show' : 'hide'}>
        <div className='dialog'>
          {this.props.message}
          <button className='btn success btn-yes' onClick={this.props.callback}>Yes</button>
          <button className='btn danger btn-no' onClick={this.props.callback}>No</button>
        </div>
        <div className='backdrop'></div>
      </div>
    );
  }
}

export default connect()(DialogComponent);
