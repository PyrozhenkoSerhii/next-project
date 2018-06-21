import React from 'react';

import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class Register extends React.Component {
    constructor(props){
        super();
        this.state = {
            username: '',
            password: '',
            rPassword: '',
            redirect: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        //todo register request

        this.setState({
            redirect: true
        })
    };

    validateForm = () => {
        return this.state.username.length > 2
            && this.state.password.length > 2
            && this.state.password === this.state.rPassword;
    };

    render(){
        if(this.state.redirect){
            //todo redirect
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" value={this.state.username} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="rPassword" bsSize="large">
                        <ControlLabel>Repeat password</ControlLabel>
                        <FormControl type="text" value={this.state.rPassword} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button disabled={!this.validateForm()} type="submit" className="btn btn-success">Register</Button>
                </form>
            </div>
        );
    }
}