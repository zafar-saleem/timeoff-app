import React, { Component, Fragment } from 'react';
import './button.css';

const Button = ({ classes, buttonLabel }) => (
  <Fragment>
    <button className={classes}>{buttonLabel}</button>
  </Fragment>
);

export default Button;