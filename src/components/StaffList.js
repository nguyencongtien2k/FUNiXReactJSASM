import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import Search from './Search';
import Add from './Add';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments
    }
}

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }
    }

    onSearch =(keyword) => {
        this.setState({keyword: keyword});
    }

    onSubmit = (data) => {
        var newStaff = {
            name: data.name,
            doB: data.doB,
            salaryScale: data.salaryScale,
            startDate: data.startDate,
            department: {
                id: '',
                name: data.department
            },
            annualLeave: data.annualLeave,
            overTime: data.overTime,
            image: '/assets/images/alberto.png'
        };

        newStaff.id = this.props.staffs.length;
        this.props.staffs.forEach(staff => {
            if (staff.id > newStaff.id) {
                newStaff.id = staff.id + 1;
            }});
        this.props.departments.map(depart => {
            if(data.department == depart.name) {
                return (
                    depart.numberOfStaff++,
                    newStaff.department.id = depart.id
                )
            }});
        this.props.staffs.push(newStaff);
        this.setState({staffs: this.props.staffs});

        localStorage.setItem('staffs', JSON.stringify(this.props.staffs));
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
        
        const staffList = this.props.staffs.filter((staff) => {
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
    
    
export default withRouter(connect(mapStateToProps)(StaffList));