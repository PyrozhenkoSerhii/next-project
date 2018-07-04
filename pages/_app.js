// import App, {Container} from 'next/app';
// import {Provider} from 'react-redux'
// import React from 'react';
// import withReduxStore from '../redux/wrapper';

// class MyApp extends App {
//     render() {
//         const {Component, pageProps, reduxStore} = this.props;
//         return (
//             <Container>
//                 <Pr  ovider store={reduxStore}>
//                     <Component {...pageProps}/>
//                 </Provider>
//             </Container>
//         );
//     }
// }

// export default withReduxStore(MyApp);

import React from 'react'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux/store'

export default withRedux(initStore)(class MyApp extends App {
    static async getInitialProps ({Component, ctx}) {
      return {
        pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    }
  
    render () {
      const {Component, pageProps, store} = this.props
      return <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    }
  })

