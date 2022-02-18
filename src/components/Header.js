import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state={
            isNavOpen: false
        };
    }

    toggleNav = () => {
        this.setState({ 
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand='sm'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto mrColl" href="/"><img src='asset/images/logo.png' height='30' width='41' alt='logo' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/staffs'>
                                        <span className='fa fa-users' /> Nhân Viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/departments'>
                                        <span className='fa fa-id-card-o' /> Phòng Ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/payroll'>
                                        <span className='fa fa-money' /> Bản Lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;