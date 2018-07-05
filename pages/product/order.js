import { Component } from 'react';
import { connect } from 'react-redux'
import Layout from "../../components/layout";
import { remove } from "../../redux/actions/product";
import Link from 'next/link'

import { testServerRedux } from '../../redux/actions/user';

class Order extends Component {
    static getInitialProps({ req, store }) {
        const date = new Date();
        console.log(`>> Testing... ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}(${date.getMilliseconds()})`);
        // how to send a data from server redux to client one?
        if (req) {
            store.dispatch(testServerRedux());
            console.log(store.getState());
            console.log('server dispatch testing');
            const timer = setTimeout(() => console.log('timeout'), 5000)
        } else {
            store.dispatch(testServerRedux());
            console.log('client dispatch test');
        }


    }

    constructor(props) {
        super();
        this.stackPrices = [];
    }

    getProductInfo(id) {
        let product = this.props.products.find(obj => obj._id === id);
        return { title: product.title, price: product.price };
    };

    getStackPrice(count, price) {
        const stackPrice = Number.parseInt(count) * Number.parseInt(price);
        this.stackPrices.push(stackPrice);
        return stackPrice
    }

    getFinalPrice() {
        return this.stackPrices.length === 0 ? 0 : this.stackPrices.reduce((sum, x) => sum + x);
    }

    removeFromOrder = (e) => {
        this.props.remove(e.target.id);
        this.stackPrices = [];
    };

    order = () => {
        // todo: product order
    };

    render() {
        return (
            <Layout>
                <h3 align="center">Your order:</h3>
                <hr />
                <div className="row">
                    <div className="col-md-2">
                        <h4>Remove</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Title</h4>
                    </div>
                    <div className="col-md-2">
                        <h4>Price</h4>
                    </div>
                    <div className="col-md-2">
                        <h4>Quantity</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Stack price</h4>
                    </div>
                </div>
                {this.props.productState.map(el => (
                    <div className="row" key={el.id}>
                        <div className="col-md-2">
                            <button className="btn btn-danger btn-circle" id={el.id} onClick={this.removeFromOrder}>-
                            </button>
                        </div>
                        <div className="col-md-3">
                            <Link href={`/product/view?id=${el.id}`}>
                                <a ><h5 className="h-link">{this.getProductInfo(el.id).title}</h5></a>
                            </Link>
                        </div>

                        <div className="col-md-2">
                            <h5>{this.getProductInfo(el.id).price} $</h5>
                        </div>
                        <div className="col-md-2">
                            <h5>{el.count}</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>{this.getStackPrice(el.count, this.getProductInfo(el.id).price)}</h5>
                        </div>
                        <hr />
                    </div>
                ))}
                <hr />
                <h4>Final price: {this.getFinalPrice()}</h4>
                <button className="btn btn-primary" onClick={this.order}>Order</button>
                <style jsx>{`
                    .btn-circle {
                        width: 25px;
                        height: 25px;
                        padding: 0px 0px;
                        border-radius: 15px;
                        text-align: center;
                        font-size: 12px;
                        line-height: 1.42857;
                        margin-left: 20%;
                    }
                    .h-link {
                        color: green;
                    }

                `}</style>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return { productState: state.product.productState, products: state.product.products }
};

const mapDispatchToProps = dispatch => {
    return {
        remove: id => dispatch(remove(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Order);