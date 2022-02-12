import React, { Component } from 'react';
import StaffList from './StaffList';
import Info from './Info';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS,
            selectStaff: null
        }
    }

    onSelectStaff = (staffId) => {
        this.setState({ selectStaff: staffId });
    }

    render() {
        return (
            <div>
                <Header />
                <StaffList staffs={this.state.staffs} onClick={(staffId) => this.onSelectStaff(staffId)} />
                <Info staff={this.state.staffs.filter((staff) => staff.id === this.state.selectStaff)[0]} /> <br />
                <Footer />
            </div>
        );
    }
}

export default Main;