import React from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';

const RenderStaffItem = ({staff}) => {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
            <Link to={`/staffs/${staff.id}`}>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
            </Link>
                <h4 className='nameStaff'>{staff.name}</h4>
            </Card>
        </FadeTransform>
    );
};

const DepartStaff = (props) => {
    const staffs = props.staff.map((val) => (
        <div className="col-12 col-sm-4 col-md-2 mt-3 mb-3" key={val.id}>
            <RenderStaffItem staff={val} />
        </div>
    ));

    if (props.staff != null && props.dept != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/departments">Phòng ban</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dept.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dept.name}</h3> <hr />
                    </div>
                </div>
                <div className="row">{staffs}</div>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DepartStaff;
