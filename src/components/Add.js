import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Label, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs';

class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            departments: DEPARTMENTS,
            name: '',
            doB: '',
            salaryScale: 1,
            startDate: '',
            department: '',
            annualLeave: 0,
            overTime: 0,
            message: '',
            touched: {
                name: false,
                doB: false,
                startDate: false,
            },
            isModalOpen: false
        }
        this.onBlur = this.onBlur.bind(this);
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    onChange = (event) => {
        var target = event.target;
        var value = target.value;
        var name = target.name;

        this.setState({ 
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    validate(name) {
        const errors = {
            name: '',
            doB: '',
            startDate: '',
        };

        if (this.state.name === '')
            errors.name = 'Yêu cầu nhập';
        else if (this.state.touched.name && name.length < 3)
            errors.name = 'Yêu cầu nhiều hơn 2 ký tự';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Yêu cầu ít hơn 30 ký tự';

        if (this.state.doB === '')
            errors.doB = 'Yêu cầu nhập';

        if (this.state.startDate === '')
            errors.startDate = 'Yêu cầu nhập';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.doB, this.state.startDate);
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-plus"></span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit = {this.onSubmit}>
                            <FormGroup>
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Tên</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input type="text" name="name"
                                            className="form-control" 
                                            value={this.state.name}
                                            valid={errors.name === ''}
                                            invalid={errors.name !== ''}
                                            onBlur={this.onBlur('name')}
                                            onChange={this.onChange}
                                        />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </Col>
                                </div>
                                <br />
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Ngày sinh</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input type="date" name="doB"
                                            className="form-control" 
                                            value={this.state.doB}
                                            valid={errors.doB === ''}
                                            invalid={errors.doB !== ''}
                                            onBlur={this.onBlur('doB')}
                                            onChange={this.onChange}
                                        />
                                        <FormFeedback>{errors.doB}</FormFeedback>
                                    </Col>
                                </div>
                                <br />
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Ngày vào công ty</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input type="date" name="startDate"
                                            className="form-control" 
                                            value={this.state.startDate}
                                            valid={errors.startDate === ''}
                                            invalid={errors.startDate !== ''}
                                            onBlur={this.onBlur('startDate')}
                                            onChange={this.onChange}
                                        />
                                        <FormFeedback>{errors.startDate}</FormFeedback>
                                    </Col>
                                </div>
                                <br />
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Phòng ban</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input  type="select" name="department" 
                                                className="form-control" 
                                                value={this.state.department}
                                                onChange={this.onChange} >
                                            {this.state.departments.map(department => (
                                                <option key={department.id}>{department.name}</option>
                                            ))}
                                        </Input>
                                    </Col>
                                </div>
                                <br />
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Hệ số lương</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input type="text" name="salaryScale"
                                            className="form-control" 
                                            value={this.state.salaryScale}
                                            onChange={this.onChange}
                                            placeholder="1.0 -> 3.0"
                                        />
                                    </Col>
                                </div>
                                <br />
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Số ngày nghỉ còn lại</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input type="text" name="annualLeave"
                                            className="form-control" 
                                            value={this.state.annualLeave}
                                            onChange={this.onChange}
                                            placeholder="1.0"
                                        />
                                    </Col>
                                </div>
                                <br />
                                <div className="row">
                                    <Col md={3}>
                                        <Label>Số ngày đã làm thêm</Label>
                                    </Col>
                                    <Col md={9}>
                                        <Input type="text" name="overTime"
                                            className="form-control" 
                                            value={this.state.overTime}
                                            onChange={this.onChange}
                                        />
                                    </Col>
                                </div>
                            </FormGroup>
                            <Button type='submit' color="primary" onClick={this.toggleModal}>Thêm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Add;