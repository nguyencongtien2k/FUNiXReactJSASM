import React, { Component } from 'react';
import Depart from './Depart';
import StaffList from './StaffList';
import Payroll from './Payroll';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import DepartStaff from './DepartStaff';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStaffs, fetchDepartments, fetchStaffsSalary } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary
}};

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => {dispatch(fetchStaffs())},
    fetchDepartments: () => {dispatch(fetchDepartments())},
    fetchStaffsSalary: () => {dispatch(fetchStaffsSalary())},
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchStaffsSalary();
    }

    render() {
        const StaffWithId = ({match}) => {
            return(
                <Info staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
                    department={this.props.departments.departments} 
                    isLoading= {this.props.staffs.isLoading}
                    errMess= {this.props.staffs.errMess}
            />)}

        const DepartWithId = ({match}) => {
            return(
                <DepartStaff
                    dept={this.props.departments.departments.filter((dept) => dept.id === match.params.deptId)[0]}
                    staff={this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.deptId)}
            />)}
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList staffs={this.props.staffs} /> } />
                    <Route path="/staffs/:staffId" component={StaffWithId} />
                    <Route exact path="/departments" component={() => <Depart departments={this.props.departments} /> } />
                    <Route path='/departments/:deptId' component={DepartWithId} />
                    <Route exact path="/payroll" component={() => <Payroll staffs={this.props.staffs} /> } />
                    <Redirect to='/staffs' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));