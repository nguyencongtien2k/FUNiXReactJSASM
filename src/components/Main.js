import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './StaffList';
import Info from './Info';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

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
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>
                <StaffList staffs={this.state.staffs} onClick={(staffId) => this.onSelectStaff(staffId)} />
                <Info staff={this.state.staffs.filter((staff) => staff.id === this.state.selectStaff)[0]} />
            </div>
        );
    }
}

export default Main;