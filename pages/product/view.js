import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import { API_URL, PRODUCTS } from "../../assets/config/api";
import React from 'react';
import { orderProduct, updateOrder } from '../../redux/actions/product';
import { connect } from "react-redux";
import Link from 'next/link';
import socketIO from 'socket.io-client'
import clientCookies from 'js-cookie';

class View extends React.Component {
    static async getInitialProps(context) {
        const res = await fetch(API_URL + PRODUCTS + 'getById', {
            method: 'POST',
            body: JSON.stringify({ id: context.query.id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return { product: data.product };
    }

    constructor(props) {
        super();
        const product = props.productState.find((obj) => obj.id === props.product._id);
        this.state = {
            localCount: product === undefined ? 0 : product.count,
            messages: [],
            connectedTime: new Date(Date.now()),
            socket: socketIO('https://obscure-stream-46512.herokuapp.com/'),
            customer: clientCookies.getJSON('customer'),
            type: 'customer',
            //todo: consultant
            room: '5aea138d5f09713c5c2ea10c'
        };
        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        this.state.socket.emit('room', {
            data: {
                room: this.state.room,
                type: this.state.type,
                user: this.state.customer.username,
                connectedTime: this.state.connectedTime,
                product: this.props.product
            }
        })
        this.state.socket.on('customerOutput', (data) => {
            console.log(data);
            this.setState({
                messages: data
            })
        })
    }

    componentWillUnmount() {
        this.state.socket.emit('disconnectedMessage', { user: this.state.customer.username, room: this.state.room });
        this.state.socket.close({ user: this.state.customer.username });
    }

    increaseCount = () => {
        const count = this.state.localCount + 1;
        this.setState({
            localCount: count
        })
    };
    decreaseCount = () => {
        let count = this.state.localCount;
        if (count > 0) {
            count--;
        }
        this.setState({
            localCount: count
        })
    };
    orderProduct = () => {
        const productId = this.props.product._id;
        const productState = { id: productId, count: this.state.localCount };
        if (this.props.productState.some(el => el.id === productId)) {
            this.props.update(productState);
        } else {
            this.props.order(productState);
        }
    };
    sendMessage() {
        this.state.socket.emit('input',
            {
                chat: {
                    user: this.state.customer.username,
                    message: 'new message from react',
                    room: this.state.room,
                    profileImage: this.state.customer.profileImage,
                    date: new Date(Date.now()),
                    type: 'private',
                    isSystemMessage: false
                },
                time: this.state.connectedTime
            }
        );
    }

    render() {
        return (
            <Layout>
                <h3 style={{ textAlign: 'center' }}>Product View</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h5>{this.props.product.title}</h5>
                        <h6>Specification</h6>
                        <ul>
                            {this.props.product.specification.map((element) => (
                                <li key={element.name}>{element.name}:{element.value}</li>
                            ))}
                        </ul>
                        <hr />
                        <h4>Order</h4>
                        <button className="btn btn-primary btn-sm" onClick={this.decreaseCount}>-</button>
                        <span>{this.state.localCount}</span>
                        <button className="btn btn-primary btn-sm" onClick={this.increaseCount}>+</button>
                        <br />
                        <a onClick={this.orderProduct}>
                            <Link href="/product/order">
                                <button className="btn btn-success">Order</button>
                            </Link>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <h5>Socket io test messages</h5>
                        {this.state.messages.map(el => (
                            <p key={el._id}>
                                {el.message}
                            </p>
                        ))}
                        <button className="btn btn-primary" onClick={this.sendMessage}>Send test message</button>
                    </div>
                </div>



                <style jsx>{`
                    .btn{
                        margin: 10px;
                        border-radius: 20px;
                    }
                    .btn-sm{
                        width: 30px;
                        height: 30px;
                    }
                `}</style>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        productState: state.product.productState,
        products: state.product.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        order: product => dispatch(orderProduct(product)),
        update: product => dispatch(updateOrder(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(View);