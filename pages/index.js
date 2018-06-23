import Layout from '../components/layout';
import {startClock, serverRenderClock} from "../redux/actions/clock";
import {connect} from 'react-redux';
import React from 'react';
import Example from '../components/redux-test/example';

class Index extends React.Component{
    static async getInitialProps({reduxStore, req}){
        const isServer = !!req;
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
                <h3 align="center">Home</h3>
                <Example/>
            </Layout>
        );
    }
}

export default connect()(Index);