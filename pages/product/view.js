import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import {API_URL, PRODUCTS} from "../../assets/config/api";

const View = (props) => (
    <Layout>
        <h3>Product View</h3>
        <hr />
        <h5>{props.product.title}</h5>
        <h6>Specification</h6>
        <ul>
            {props.product.specification.map((element) => (
                <li key={element.name}>{element.name}:{element.value}</li>
            ))}
        </ul>
    </Layout>
);


View.getInitialProps = async function (context) {
    const res = await fetch(API_URL + PRODUCTS + 'getById', {
        method: 'POST',
        body: JSON.stringify({id: context.query.id}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const data = await res.json();
    console.log(data.product);
    return {product: data.product};
};

export default View;