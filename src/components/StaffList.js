import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaffList({staff, onClick}) {
  return (
    <Card>
      <Link to={`/staffs/${staff.id}`}>
        <CardImg src={staff.image} alt={staff.name} />
      </Link>
        <h4 className='nameStaff'>{staff.name}</h4>
    </Card>
  )
}

const StaffList = (props) => {
  const staff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3 mb-3">
        <RenderStaffList staff={staff} />
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
        {staff}
      </div>
    </div>
  );
}

export default StaffList;