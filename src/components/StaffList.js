import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { STAFFS } from '../shared/staffs';

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    }
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
    const staffList = this.state.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3 mb-3">
          {this.renderStaffList(staff)}
        </div>
      );
    });
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-10 col-md-6">
            <h3>Nhân Viên</h3>
          </div>
          <hr />
        </div>
        <div className="row">
          {staffList}
        </div>
      </div>
    );
  }
}


export default StaffList;