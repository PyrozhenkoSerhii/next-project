import React from 'react';
import Layout from '../components/layout';

class Test extends React.Component {
    static getInitialProps({ req }) {
        console.log('Request : ', req);
        return {
            server: !!req
        }
    }
    render() {
        return (
            <Layout>
                <div>
                    <p>This is {this.props.server ? 'server' : 'client'}</p>
                </div>
            </Layout>
        );
    }
}

export default Test;