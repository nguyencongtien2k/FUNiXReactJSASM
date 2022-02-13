import React, { Component } from 'react';
import Depart from './Depart';
import StaffList from './StaffList';
import Payroll from './Payroll';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}

class Main extends Component {
    render() {
        const StaffWithId = ({match}) => {
            return(
                <Info staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.id,10))[0]} />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList staffs={this.props.staffs} /> } />
                    <Route path="/staffs/:id" component={StaffWithId} />
                    <Route exact path="/depart" component={() => <Depart departments={this.props.departments} /> } />
                    <Route exact path="/payroll" component={() => <Payroll staffs={this.props.staffs} /> } />
                    <Redirect to='/staffs' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));