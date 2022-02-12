import React from 'react';
import { Card, CardImg } from 'reactstrap';
import dateFormat from 'dateformat'; 

    function RenderInfo({staff}) {
        return (
            <div className="row">
                <div className='col-12 col-sm-6 col-md-6 mb-3'>
                    <CardImg src={staff.image} alt={staff.name} />
                </div>
                <div className='col-12 col-sm-6 col-md-6 mb-3'>
                    <Card>
                    <h4>Họ và tên: {staff.name}</h4>
                    <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {staff.overTime}</p>
                    </Card>
                </div>
            </div>
        );
    }

    const Info = (props) => {
        if (props.staff != null) {
            return (
                <div className="container">
                    <RenderInfo staff={props.staff} />
                </div>
            );
        } else {
            return <div></div>
        }
    }

    export default Info;