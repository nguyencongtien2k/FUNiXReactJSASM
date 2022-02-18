import React from 'react';
import { CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderInfo({staff, department}) {
        if (staff != null && department != null) {
            return (
                <div className="row">
                    <div className='col-12 col-sm-6 col-md-6 mb-3'>
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)'
                            }}>
                            <CardImg src={staff.image} alt={staff.name} />
                        </FadeTransform>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 mb-3'>
                        <Stagger in>
                            <Fade in>
                                <h4>Họ và tên: {staff.name}</h4>
                                <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                                <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                                <p>Phòng ban: {department.name}</p>
                                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                                <p>Số ngày đã làm thêm: {staff.overTime}</p>
                            </Fade>
                        </Stagger>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }

    const Info = (props) => {
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        } else if (props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        } else if (props.staff != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/staffs'>Nhân Viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <RenderInfo staff={props.staff} department={props.department.filter(depart => depart.id === props.staff.departmentId)[0]}/>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    export default Info;