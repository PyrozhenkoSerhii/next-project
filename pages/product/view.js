import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import {API_URL, PRODUCTS} from "../../assets/config/api";
import React from 'react';
import {setCount} from '../../redux/actions/order';
import {connect} from "react-redux";
import Link from 'next/link';

class View extends React.Component {
    static async getInitialProps(context) {
        const res = await fetch(API_URL + PRODUCTS + 'getById', {
            method: 'POST',
            body: JSON.stringify({id: context.query.id}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return {product: data.product};
    }

    constructor(props) {
        super();
        this.state = {
            localCount: props.initialCount
        }
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
        console.log('order');
        this.props.order(this.state.localCount);
    };

    render() {
        return (
            <Layout>
                <h3 style={{textAlign: 'center'}}>Product View</h3>
                <hr/>
                <h5>{this.props.product.title}</h5>
                <h6>Specification</h6>
                <ul>
                    {this.props.product.specification.map((element) => (
                        <li key={element.name}>{element.name}:{element.value}</li>
                    ))}
                </ul>
                <hr/>
                <h4>Order</h4>
                <button className="btn btn-primary btn-sm" onClick={this.decreaseCount}>-</button>
                <span>{this.state.localCount}</span>
                <button className="btn btn-primary btn-sm" onClick={this.increaseCount}>+</button>
                <br/>
                <a onClick={this.orderProduct}>
                    <Link href="/product/order">
                        <button className="btn btn-success">Order</button>
                    </Link>
                </a>
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

const mapDispatchToProps = dispatch => {
    return {
        order: productCount => dispatch(setCount(productCount))
    }
};

const mapStateToProps = state => {
    return {initialCount: state.product.productCount}
};

export default connect(mapStateToProps, mapDispatchToProps)(View);