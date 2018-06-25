import {Component} from 'react';
import {connect} from 'react-redux'
import Layout from "../../components/layout";

class Order extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Layout>
                <h3>Your order:</h3>
                {this.props.productState.map(el => (
                    <div className="row" key={el.id}>
                        <div className="col-md-6">
                            <h4>Title: test</h4>
                        </div>
                        <div className="col-md-6">
                            <h4>Count: {el.count}</h4>
                        </div>
                    </div>
                ))}
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {productState: state.product.productState}
};

export default connect(mapStateToProps, null)(Order);