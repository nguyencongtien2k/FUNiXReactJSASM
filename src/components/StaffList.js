import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { STAFFS } from '../shared/staffs';
import Search from './Search';
import Add from './Add';

var xID = 16;

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            keyword: ''
        }
    }

    onSearch =(keyword) => {
        this.setState({keyword: keyword});
    }

    onSubmit = (data) => {
        var { staffs } = this.state;
        data.id = this.generateID();
        data.image = '/assets/images/alberto.png';
        staffs.push(data);
        this.setState({staffs: staffs});

        localStorage.setItem('staffs', JSON.stringify(staffs));
    }

    s4() {
        return (xID += 1);
    }

    generateID () {
        return this.s4();
    }

    renderStaffList(staff) {
        return (
            <Card>
                <Link to={`/staffs/${staff.id}`}>
                    <CardImg src={staff.image} alt={staff.name} />
                </Link>
                    <h4 className='nameStaff'>{staff.name}</h4>
            </Card>
        )
      }
      
    render() {
        
        const staffList = this.state.staffs.filter((staff) => {
            return (
                staff.name.toLowerCase().indexOf(this.state.keyword) !== -1
            )
        }).map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3 mb-3">
                    {this.renderStaffList(staff)}
                </div>
            );
        });
      
        return (
            <div className="container"> <br />
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-10 col-sm-10 col-md-10">
                                <h3>Nhân Viên</h3>
                            </div>
                            <div className="col-2 col-sm-2 col-md-2">
                                <Add onSubmit = {this.onSubmit} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <Search onSearch={this.onSearch}/>
                    </div>
                </div> <hr />
                <div className="row">
                    {staffList}
                </div>
            </div>
        );
    }
}
    
    
export default StaffList;