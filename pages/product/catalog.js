import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import {API_URL, PRODUCTS} from "../../assets/config/api";

const Catalog = (props) => (
    <Layout>
        <h3 align="center">Catalog</h3>
        <ul>
            {props.products.map((product) => (
                <div className="productWrapper" key={product._id}>
                    <img className="productImage" src={product.image}/>
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

Catalog.getInitialProps = async function () {
    const res = await fetch(API_URL + PRODUCTS + 'getAll', {method: 'GET'});
    const data = await res.json();
    return {products: data.products};
};

export default Catalog;