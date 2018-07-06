import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Router from 'next/router';
import jsCookies from 'js-cookie';

import { saveUser, saveToken } from "../../redux/actions/user";
import { API_URL, CUSTOMERS } from "../../assets/config/api";

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Login extends React.Component {
    config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

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
        const customer = { username: this.state.username, password: this.state.password };
        axios.post(API_URL + CUSTOMERS + 'authenticate', { customer }, this.config)
            .then((response) => {
                if (response.data.success) {
                    this.props.saveUser(response.data.customer);
                    this.props.saveToken(response.data.token);

                    jsCookies.set('token', response.data.token);
                    jsCookies.set('customer', response.data.customer);

                    this.setState({
                        redirect: true,
                    });
                } else {
                    console.log('wrong user data');
                }
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

    render() {
        if (this.state.redirect) {
            Router.push('/product/catalog');
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button disabled={!this.validateForm()} className="btn btn-success" type="submit">Login</Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveUser: user => dispatch(saveUser(user)),
        saveToken: token => dispatch(saveToken(token))
    }
};

export default connect(null, mapDispatchToProps)(Login);