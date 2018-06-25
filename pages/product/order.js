import {Component} from 'react';
import {connect} from 'react-redux'
import Layout from "../../components/layout";

class Order extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <Layout>
                <h3>You have ordered {this.props.productCount} things</h3>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {productState: state.product.productState}
};

export default connect(mapStateToProps, null)(Order);