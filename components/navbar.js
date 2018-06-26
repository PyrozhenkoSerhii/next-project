import Link from 'next/link';
import {connect} from 'react-redux';
import {Component} from 'react';

class Navbar extends Component {
    static getInitialProps({req}){
        const isServer = !!req;
        let token = true;
        if(!isServer){
            token = localStorage.getItem('token') !== undefined;
        }
        return {authenticated: true}
    }

    logout = () => {
        localStorage.clear();
    };

    // loggedIn = () => {
    //     return token = localStorage.getItem(token) !== undefined;
    // };

    render() {
        return (
            <div>
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
                                {!this.props.authenticated && <li className="nav-item">
                                    <Link prefetch href="/product/catalog">
                                        <a className="nav-link">Catalog</a>
                                    </Link>
                                </li>}
                                {!this.props.authenticated && <li className="nav-item">
                                    <Link href="/product/order">
                                        <a className="nav-link">Order</a>
                                    </Link>
                                </li>}
                                {!this.props.authenticated && <li className="nav-item">
                                    <Link href="/user/login">
                                        <a className="nav-link">Login</a>
                                    </Link>
                                </li>}
                                {!this.props.authenticated && <li className="nav-item">
                                    <Link href="/user/register">
                                        <a className="nav-link">Register</a>
                                    </Link>
                                </li>}

                                {!this.props.authenticated && <li className="nav-item">
                                    <a className="nav-link" onClick={this.logout}>Register</a>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
};

export default Navbar;