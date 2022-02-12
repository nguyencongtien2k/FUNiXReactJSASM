import React, { Component } from 'react';
import StaffList from './StaffList';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Header from './Header';
import Footer from './Footer';
import Depart from './Depart';
import Payroll from './Payroll';
import { Switch, Route, Redirect } from 'react-router-dom';

    class Main extends Component {
        constructor(props) {
            super(props);

            this.state = {
                staffs: STAFFS,
                departments: DEPARTMENTS,
            }
        }

        render() {
            return (
                <div>
                    <Header />
                    <Switch>
                        <Route path="/staffs" component={() => <StaffList staffs={this.state.staffs} /> } />
                        <Route path="/depart" component={() => <Depart departments={this.state.departments} /> } />
                        <Route path="/payroll" component={() => <Payroll staffs={this.state.staffs} /> } />
                        <Redirect to='/staffs' />
                    </Switch>
                    <Footer />
                </div>
            );
        }
    }

    export default Main;