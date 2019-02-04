import React, { Component } from 'react';
import HeaderComponent from '../../commons/headerComponent';
import { connect } from 'react-redux';

import { employeesListAction, searchEmployeeAction } from '../../../actions/adminActions';
import EmployeesListView from './employeesListView';
import { getCookie } from '../../../utils/cookies';

class EmplyeesListComponent extends Component {

  state = {
    employees: undefined,
    search: ''
  }

  constructor(props) {
    super(props);
    const data = {
      id: getCookie('id'),
      access: getCookie('role')
    };

    this.props.dispatch(employeesListAction(data));
  }

  handleOnChange = (event) => {
    if (event.target.value.length > 1) {
      this.setState({ search: event.target.value });

      this.props.dispatch(searchEmployeeAction({
        search: event.target.value,
        access: getCookie('role'),
        id: getCookie('id')
      }));
    } else {
      this.setState({ search: '' });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.response.search.hasOwnProperty('term')) {
      if (nextProps.response.search.term.length > 0 && prevState.search.length > 0) {
        return {
          employees: nextProps.response.search.term
        };
      } else {
        return {
          employees: nextProps.response.list.response
        };
      }
    } else {
      return {
        employees: nextProps.response.list.response
      };
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <EmployeesListView
          list={this.state.employees}
          handleOnChange={this.handleOnChange.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state
});

export default connect(mapStateToProps)(EmplyeesListComponent);
