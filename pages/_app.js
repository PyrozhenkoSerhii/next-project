import App, {Container} from 'next/app';
import withReduxStore from '../redux/wrapper';
import {Provider} from 'react-redux'
import React from 'react';

class MyApp extends App {
    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps}/>
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(MyApp);