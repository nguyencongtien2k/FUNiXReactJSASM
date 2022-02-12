import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import Info from './Info';

class StaffList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectStaff: null
      };
  }

  onSelectStaff = (staff) => {
    this.setState({ selectStaff: staff });
  }

  render() {
    const staff = this.props.staffs.map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3">
            <Card onClick={() => {this.onSelectStaff(staff)}}>
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
        <Info selectStaff={this.state.selectStaff} />
      </div>
    );
  }
}

export default StaffList;