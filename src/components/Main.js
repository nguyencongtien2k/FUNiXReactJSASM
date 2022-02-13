import React, { Component } from 'react';
import Depart from './Depart';
import StaffList from './StaffList';
import Payroll from './Payroll';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        };
    }

    render() {
        const StaffWithId = ({match}) => {
            return(
                <Info staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id,10))[0]} />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList staffs={this.state.staffs} /> } />
                    <Route path="/staffs/:id" component={StaffWithId} />
                    <Route exact path="/depart" component={() => <Depart departments={this.state.departments} /> } />
                    <Route exact path="/payroll" component={() => <Payroll staffs={this.state.staffs} /> } />
                    <Redirect to='/staffs' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;