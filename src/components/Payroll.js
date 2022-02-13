import React from 'react';
import { Card, CardBody, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

    function RenderPayroll({staff}) {
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
        const salary = (staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary);
        return(
            <div className="col-12 col-sm-6 col-md-4 mt-3 mb-3">
                <Card key={staff.id} className="color1">
                    <h3 className="nag">{staff.name}</h3>
                    <CardBody>
                        <CardText>Mã nhân viên: {staff.id}</CardText>
                        <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                        <CardText>Số giờ đã làm thêm: {staff.overTime}</CardText>
                        <CardText className="lag ml-2">Lương: {salary}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
        
    }

    const Payroll = (props) => {
        const money = props.staffs.map((staff) => {
            return(
                <RenderPayroll staff={staff} /> 
            )
        });
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/staffs'>Nhân Viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    {money}
                </div>
            </div>
        )
    }

    export default Payroll;