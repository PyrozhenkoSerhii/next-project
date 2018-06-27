import React from 'react';
import axios from 'axios';
import {API_URL, CUSTOMERS} from '../../assets/config/api'
import Router from 'next/router';
import Link from 'next/link';

import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

export default class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            username: '',
            password: '',
            rPassword: '',
            email: '',
            age: '',
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
        const customer = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            age: this.state.age,
            password: this.state.password
        };

        axios.post(API_URL + CUSTOMERS + 'register', {customer}, this.config)
            .then((response) => {
                console.log(response);
            });

        this.setState({
            redirect: true
        })
    };

    validateForm = () => {
        return this.state.username.length > 2
            && this.state.password.length > 2
            && this.state.name.length > 2
            && this.state.email.length > 4
            && (this.state.age > 10 && this.state.age < 120)
            && this.state.password === this.state.rPassword;
    };

    render() {
        if (this.state.redirect) {
            Router.push('/user/login');
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="name" bsSize="large">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" value={this.state.name} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" value={this.state.username} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="age" bsSize="large">
                        <ControlLabel>Age</ControlLabel>
                        <FormControl type="number" value={this.state.age} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="rPassword" bsSize="large">
                        <ControlLabel>Repeat password</ControlLabel>
                        <FormControl type="text" value={this.state.rPassword} onChange={this.handleChange}/>
                    </FormGroup>
                    <button disabled={!this.validateForm()} type="submit" className="btn btn-success">Register</button>
                    <Link href="/user/register">
                        <a className="nav-link">Alrady have an account? Login</a>
                    </Link>
                </form>
                <style jsx>{`
                    .span-error{
                        font-size: 10px;
                        color: red;
                    }
                    button{
                        align: center;
                    }
                `}</style>
            </div>
        );
    }
}