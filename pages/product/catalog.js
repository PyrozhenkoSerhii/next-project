import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { API_URL, PRODUCTS } from "../../assets/config/api";
import { uploadProducts } from "../../redux/actions/product";
import { connect } from 'react-redux';
import React from 'react';


class Catalog extends React.Component {
    static async getInitialProps({ store, req, query }) {
        let products;

        const state = store.getState();
        if (state.product.products.length > 0) {
            console.info('Products from redux storage');
            return { products: state.product.products };
        }
        if (req) {
            products = query.serverData.products;
            console.info('Products from server\'s API request')
        } else {
            const res = await fetch(API_URL + PRODUCTS + 'getAll', { method: 'GET' });
            const data = await res.json();
            products = data.products;
            console.info('Products from client\'s API request');
        }

        return { products: products };
    }

    constructor(props) {
        super();
        if (props.uploadedProducts.length === 0) {
            props.uploadProducts(props.products);
        }
    }

    render() {
        return (
            <Layout>
                <h3 align="center">Catalog</h3>
                <ul>
                    {this.props.products.map((product) => (
                        <div className="productWrapper" key={product._id}>
                            <img className="productImage" src={product.image} />
                            <h6 align="center">{product.title}</h6>
                            <h6 align="center">{product.price}$</h6>
                            <Link href={`/product/view?id=${product._id}`}>
                                <p className="forwardP">Forward</p>
                            </Link>
                        </div>
                    ))}
                </ul>
                <style jsx>{`
                    .forwardP {
                        color: green;
                        font-size: 20px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .productWrapper{
                        vertical-align: top;
                        border: 1px solid #cacaca;
                        background: #f8f1ff;
                        margin: 20px 10px 20px 10px;
                        padding: 10px;
                        position: static;
                        display: inline-block;
                        border-radius: 15px;
                        width: 20%;
                        min-height: 200px;
                        min-width: 200px;
                    }
                    .productImage {
                        background-repeat: no-repeat;
                        width: 100%;
                        height: auto;
                        max-width: 200px;
                        height: 200px;
                    }
                    .btnForward {
                        width: 30px;
                        height: 30px;
                        background: transparent;
                        border: none;
                        cursor: pointer;
                        background-size: 100%;
                        background-size: 30px auto;
                        background-repeat: no-repeat;
                        margin-left: 65%;
                    }
                `}</style>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        uploadedProducts: state.product.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        uploadProducts: products => dispatch(uploadProducts(products))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);