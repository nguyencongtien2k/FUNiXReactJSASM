import React from 'react';
import { Card, CardBody, CardText } from "reactstrap";
import { Link } from 'react-router-dom';

    function RenderDepart({depart}) {
        return (
            <div className='col-12 col-sm-6 col-md-4 mt-3 mb-3'>
                <Card>
                    <Link to={`departments/${depart.id}`}>
                        <h3>{depart.name}</h3>
                    </Link>
                    <CardBody>
                        <CardText><strong>Số lượng nhân viên: {depart.numberOfStaff}</strong></CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
    const Depart = (props) => {
        const depart = props.departments.departments.map(depart =>{
            return (
                <RenderDepart key={depart.id} depart={depart} />
            )
        });
        return (
            <div className="container">
                <div className="row">
                    <h3>Phòng Ban</h3> <hr />
                </div>
                <div className="row">
                    {depart}
                </div>
            </div>
        )
    }

    export default Depart;