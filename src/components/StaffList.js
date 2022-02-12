import React from 'react';
import { Card, CardImg } from 'reactstrap';

function RenderStaffList({staff, onClick}) {
  return (
    <Card onClick={() => onClick(staff.id)}>
      <CardImg src={staff.image} alt={staff.name} />
      <h4 className='nameStaff'>{staff.name}</h4>
    </Card>
  )
}

const StaffList = (props) => {
  const staff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-12 col-sm-4 col-md-2 mt-3">
        <RenderStaffList staff={staff} onClick={props.onClick} />
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

export default StaffList;