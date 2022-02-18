import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import Search from './Search';
import Add from './Add';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Loading } from './Loading';
import { FadeTransform } from 'react-animation-components';

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
            departmentId: data.department,
            annualLeave: data.annualLeave,
            overTime: data.overTime,
            image: '/asset/images/alberto.png'
        };

        newStaff.id = this.props.staffs.staffs.length;
        this.props.staffs.staffs.forEach(staff => {
            if (staff.id > newStaff.id) {
                newStaff.id = staff.id + 1;
            }});
        this.props.departments.departments.map(depart => {
            if(data.department === depart.name) {
                return (
                    depart.numberOfStaff++,
                    newStaff.departmentId = depart.id
                )
            }});
        this.props.staffs.staffs.push(newStaff);
        this.setState({staffs: this.props.staffs.staffs});

        localStorage.setItem('staffs', JSON.stringify(this.props.staffs.staffs));
    }


    renderStaffList(staff) {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <Link to={`/staffs/${staff.id}`}>
                        <CardImg src={staff.image} alt={staff.name} />
                    </Link>
                        <h4 className='nameStaff'>{staff.name}</h4>
                </Card>
            </FadeTransform>
        )
      }
      
    render() {
        
        const staffList = this.props.staffs.staffs.filter((staff) => {
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

        if(this.props.staffs.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        } else if (this.props.staffs.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.staffs.errMess}</h4>
                    </div>
                </div>
            )
        } else {
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
}
    
    
export default withRouter(connect(mapStateToProps)(StaffList));