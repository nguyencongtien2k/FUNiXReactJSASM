import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Label, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        departments: state.departments
    }
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
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
        this.props.onSubmit(this.state);
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-plus"></span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit = {(value) => this.onSubmit(value)}>
                            <Row className="form-group">
                                <Col md={3}><Label>Tên</Label></Col>
                                <Col md={9}>
                                    <Control.text model='.name' name="name"
                                        className="form-control" 
                                        onChange={this.onChange}
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(30)
                                        }}

                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                            minLength: 'Yêu cầu nhập nhiều hơn 2 ký tự',
                                            maxLength: 'Yêu cầu nhập ít hơn 30 ký tự'
                                        }}
                                     />
                                </Col>
                            </Row> <br />
                            <Row className="form-group">
                                <Col md={3}><Label>Ngày sinh</Label></Col>
                                <Col md={9}>
                                    <Control model='.doB' type="date" name="doB"
                                        value={this.state.tenState}
                                        className="form-control" 
                                        onChange={this.onChange}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".doB"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                        }}
                                    />
                                </Col>
                            </Row> <br />
                            <Row className="form-group">
                                <Col md={3}><Label>Ngày vào công ty</Label></Col>
                                <Col md={9}>
                                    <Control model='.startDate' type="date" name="startDate"
                                        value={this.state.tenState}
                                        className="form-control" 
                                        onChange={this.onChange}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".startDate"
                                        messages={{
                                            required: 'Yêu cầu nhập',
                                        }}
                                    />
                                </Col>
                            </Row> <br />
                            <Row className="form-group">
                                <Col md={3}><Label>Phòng ban</Label></Col>
                                <Col md={9}>
                                    <Control.select model='.department' name="department" 
                                            className="form-control" 
                                            onChange={this.onChange} >
                                        {this.props.departments.map(department => (
                                            <option key={department.id}>{department.name}</option>
                                        ))}
                                    </Control.select>
                                </Col>
                            </Row> <br />
                            <Row className="form-group">
                                <Col md={3}><Label>Hệ số lương</Label></Col>
                                <Col md={9}>
                                    <Control.text model='.salaryScale' name="salaryScale"
                                        className="form-control" 
                                        onChange={this.onChange}
                                        placeholder="1.0 -> 3.0"
                                    />
                                </Col>
                            </Row> <br />
                            <Row className="form-group">
                                <Col md={3}><Label>Số ngày nghỉ còn lại</Label></Col>
                                <Col md={9}>
                                    <Control.text model='.annualLeave' name="annualLeave"
                                        className="form-control" 
                                        onChange={this.onChange}
                                        placeholder="1.0"
                                    />
                                </Col>
                            </Row> <br />
                            <Row className="form-group">
                                <Col md={3}><Label>Số ngày đã làm thêm</Label></Col>
                                <Col md={9}>
                                    <Control.text model='.overTime' name="overTime"
                                        className="form-control" 
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </Row> <br />
                            <Button type='submit' color="primary" onClick={this.toggleModal}>Thêm</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Add));