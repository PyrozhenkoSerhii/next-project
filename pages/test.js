import React from 'react';
import Layout from '../components/layout';

class Test extends React.Component {
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

Test.getInitialProps = ({req}) => {
    return {
        server: !!req
    }
};

export default Test;