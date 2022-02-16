import React from 'react';
import { Card, CardBody, CardText } from "reactstrap";
import { Loading } from './Loading';
    
    function RenderDepart({depart}) {
        return (
            <div className='col-12 col-sm-6 col-md-4 mt-3 mb-3'>
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
        const depart = props.departments.departments.map(depart =>{
            return (
                <RenderDepart key={depart.id} depart={depart} />
            )
        });

        if (props.departments.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        } else if (props.departments.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.departments.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        {depart}
                    </div>
                </div>
            )
        }
    }

    export default Depart;