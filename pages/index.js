import Layout from '../components/layout';
import {startClock, serverRenderClock} from "../redux/actions/clock";
import {connect} from 'react-redux';
import React from 'react';

class Index extends React.Component{
    static async getInitialProps({reduxStore, req}){
        console.log(reduxStore);
        const server = !!req;
        reduxStore.dispatch(serverRenderClock(isServer));

        return {};
    }

    componentDidMount(){
        const {dispatch} = this.props;
        this.timer = startClock(dispatch);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <Layout>
                <h3 style={{textAlign: 'center'}}>Home</h3>
            </Layout>
        );
    }
}

export default connect()(Index);