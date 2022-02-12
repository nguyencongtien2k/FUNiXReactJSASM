import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class StaffList extends Component {
  render() {
    const staff = this.props.staffs.map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3">
            <Card onClick={() => this.props.onClick(staff.id)}>
              <CardImg src={staff.image} alt={staff.name} />
              <h4 className='nameStaff'>{staff.name}</h4>
            </Card>
          </div>
        );
    });

    return (
      <div className="container">
        <div className="row">
          {staff}
        </div>
      </div>
    );
  }
}

export default StaffList;