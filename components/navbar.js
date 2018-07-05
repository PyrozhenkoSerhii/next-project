import Link from 'next/link';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import cookie from 'js-cookie';
import Router from 'next/router';
import {deleteToken} from '../redux/actions/user';

class Navbar extends Component {
    constructor(props) {
        super();
        this.state = {
            redirect: false
        }
    }

    logout = () => {
        cookie.remove('token');
        this.props.deleteToken();
        this.setState({
            redirect: true
        })
        
    };

    style = {
        marginBot: '100px'
    }

    render() {
        if (this.state.redirect) {
            Router.push('/user/login')
        }
        return (
            <div style={this.style}>
                <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand">Next.js Project</a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">
                                {this.props.token && <li className="nav-item">
                                    <Link prefetch href="/product/catalog">
                                        <a className="nav-link">Catalog</a>
                                    </Link>
                                </li>}
                                {this.props.token && <li className="nav-item">
                                    <Link href="/product/order">
                                        <a className="nav-link">Order</a>
                                    </Link>
                                </li>}
                                {!this.props.token && <li className="nav-item">
                                    <Link href="/user/login">
                                        <a className="nav-link">Login</a>
                                    </Link>
                                </li>}
                                {!this.props.token && <li className="nav-item">
                                    <Link href="/user/register">
                                        <a className="nav-link">Register</a>
                                    </Link>
                                </li>}

                                {this.props.token && <li className="nav-item">
                                    <a className="nav-link" onClick={this.logout}>Logout</a>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteToken: ()=>dispatch(deleteToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);