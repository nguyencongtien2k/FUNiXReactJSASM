import React, { Component } from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <Form>
                            <FormGroup row>
                                    <div className='col-10 col-sm-10 col-md-10'>
                                        <Input type="text" name='keyword'
                                            className='form-control'
                                            value={this.state.keyword}
                                            onChange={this.handleChange}
                                             />
                                    </div>
                                    <div className='col-2 col-sm-2 col-md-2'>
                                        <Button type="button" color="primary"
                                            onClick={this.handleClick}>Tìm</Button>
                                    </div>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;