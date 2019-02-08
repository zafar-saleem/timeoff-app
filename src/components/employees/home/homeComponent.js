import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';

import HeaderComponent from '../../commons/headerComponent';
import DialogComponent from '../../commons/dialog/dialogComponent';

import HomeView from './homeView';
import {
  setVacationActions,
  fetchVacationActions,
  deleteVacationAction
} from '../../../actions/employeesActions';

import { getCookie } from '../../../utils/cookies';

import 'react-day-picker/lib/style.css';
import './home.css';

class HomeComponent extends Component {
  state = {
    from: undefined,
    to: undefined,
    isSuccess: false,
    message: '',
    list: [],
    warning: false,
    dialogMessage: '',
    id: ''
  }

  to = null;

  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchVacationActions({ id: getCookie('id') }));
  }

  onSaveHandle = (event) => {
    event.preventDefault();

    this.props.dispatch(setVacationActions({
      start: this.state.from,
      end: this.to.state.month,
      employeeID: getCookie('id'),
      expire: false
    }));

    this.props.dispatch(fetchVacationActions({ id: getCookie('id') }));

    this.setState({ from: undefined, to: undefined });
  }

  handleFromChange = (from) => {
    this.setState({ from });
  }

  handleToChange = (to) => {
    this.to = new Date(to);
    this.setState({ to: to });
  }

  onHandleDelete = (id, event) => {
    event.preventDefault();
    this.setState({
      id: id,
      warning: true,
      dialogMessage: 'Are you sure you want to delete this vacations?'
    });
  }

  deleteVacation = (event) => {
    const response = event.target.innerHTML.toLowerCase();

    if (response === 'yes') {
      this.props.dispatch(deleteVacationAction({
        id: this.state.id,
        employeeID: getCookie('id')
      }));
    }

    this.setState({
      warning: false
    });

    return <Redirect to='employee/home' />
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.vacations.hasOwnProperty('response') && nextProps.fetchVacations.hasOwnProperty('response')) {
      if (nextProps.vacations.response.success !== prevState.isSuccess) {
        return {
          isSuccess: nextProps.vacations.response.success,
          message: nextProps.vacations.response.message,
          list: nextProps.fetchVacations.response
        };
      } else {
        return {
          isSuccess: nextProps.vacations.response.success,
          message: nextProps.vacations.response.message,
          list: nextProps.fetchVacations.response
        };
      }
    } else {
      return null;
    }
  }

  render() {
    if (this.props.fetchVacations === undefined || this.props.fetchVacations.length <= 0) {
      return <div>Loading...</div>
    }

    const { from, to } = this.state;
    const today = new Date();
    const modifiers = { start: from, end: to };

    return (
      <div>
        <HeaderComponent />
        <DialogComponent
          warning={this.state.warning}
          message={this.state.dialogMessage}
          callback={this.deleteVacation.bind(this)}
        />
        <div className='home'>
        <div>
          {
            (this.state.isSuccess)
            ?
            <div className='message success'>{this.state.message}</div>
            :
            <div className='message error'>{this.state.message}</div>
          }
        </div>
        <DayPickerInput
          className='fields from'
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            disabledDays: { before: today },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange.bind(this)}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            className='fields to'
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange.bind(this)}
          />
        </span>
        <button type='button' className='btn success' onClick={this.onSaveHandle.bind(this)}>Save</button>
        <table>
          <tbody>
            {this.props.fetchVacations.response.map(vacation => (
              <HomeView vacation={vacation} handleDelete={this.onHandleDelete} key={vacation._id} />
            ))}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(HomeComponent);