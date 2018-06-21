import React from 'react';

import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //todo login request
        console.log('logged in');
        this.setState({
            redirect: true,
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    validateForm = () => {
        return this.state.username.length > 2 && this.state.password.length > 2;
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
                        <FormControl type="password" value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button disabled={!this.validateForm()} className="btn btn-success" type="submit">Login</Button>
                </form>
            </div>
        );
    }
}