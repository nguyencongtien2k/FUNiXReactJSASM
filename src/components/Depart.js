import React from 'react';
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
    
    function RenderDepart({depart}) {
        return (
            <div className='col-12 col-sm-6 col-md-4 mt-3 mb-3'>
                <Card key={depart.id}>
                    <CardTitle>{depart.name}</CardTitle>
                    <CardBody>
                        <CardText>Số lượng nhân viên: {depart.numberOfStaff}</CardText>
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