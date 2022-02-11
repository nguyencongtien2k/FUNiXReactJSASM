import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffList';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>
                <StaffList />
            </div>
        );
    }
}

export default App;
