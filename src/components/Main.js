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
import { fetchStaffs, fetchDepartments } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
}};

const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => {dispatch(fetchStaffs())},
    fetchDepartments: () => {dispatch(fetchDepartments())}
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
    }

    render() {
        const StaffWithId = ({match}) => {
            return(
                <Info staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.id,10))[0]} 
                    isLoading= {this.props.staffs.isLoading}
                    errMess= {this.props.staffs.errMess}
                />
            )
        }

        const DepartWithId = ({match}) => {
            return(
                <DepartStaff
                    dept={this.props.departments.departments.filter((dept) => dept.id === match.params.deptId)[0]}
                    staff={this.props.staffs.staffs.filter((staff) => staff.department.id === match.params.deptId)}
                />
            )
        }
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList staffs={this.props.staffs} /> } />
                    <Route path="/staffs/:id" component={StaffWithId} />
                    <Route exact path="/department" component={() => <Depart departments={this.props.departments} /> } />
                    <Route path='/department/:deptId' component={DepartWithId} />
                    <Route exact path="/payroll" component={() => <Payroll staffs={this.props.staffs} /> } />
                    <Redirect to='/staffs' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));