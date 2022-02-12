import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffList';
import { STAFFS, DEPARTMENTS } from './shared/staffs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>
                <StaffList staffs={this.state.staffs} />
            </div>
        );
    }
}

export default App;