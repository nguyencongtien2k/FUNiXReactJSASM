import React from 'react';
import { Card, CardBody, CardText } from "reactstrap";
    
    function RenderDepart({depart}) {
        return (
            <div key={depart.id} className='col-12 col-sm-6 col-md-4 mt-3 mb-3'>
                <Card>
                    <h3>{depart.name}</h3>
                    <CardBody>
                        <CardText><strong>Số lượng nhân viên: {depart.numberOfStaff}</strong></CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
    const Depart = (props) => {
        const depart = props.departments.map(depart =>{
            return (
                <RenderDepart depart={depart} />
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {depart}
                </div>
            </div>
        )
    }

    export default Depart;