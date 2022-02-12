import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import dateFormat from 'dateformat'; 

class Info extends Component {
    renderInfo(staff) {
        return (
            <div className="row">
                <div className='col-6 col-sm-6 col-md-6 mb-3'>
                    <CardImg src={staff.image} alt={staff.name} />
                </div>
                <div className='col-6 col-sm-6 col-md-6 mb-3'>
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

    render() {
        if (this.props.staff) {
            return (
                <div className="container">
                    {this.renderInfo(this.props.staff)}
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default Info;