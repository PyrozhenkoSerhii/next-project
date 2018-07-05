import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux/store'
import clientCookies from 'js-cookie';
import serverCookies from 'cookie';
import { saveToken } from '../redux/actions/user';

export default withRedux(initStore)(class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let cookies;

		if (ctx.req) {
			cookies = ctx.req.headers.cookie;

			if (typeof cookies === 'string') {
				const cookiesJSON = serverCookies.parse(cookies)
				const token = cookiesJSON.token;
			}

			console.log('server cookies', cookies);
		} else {
			cookies = clientCookies.get('token');
			console.log('client cookies', cookies);
		}
		return {
			pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			cookies: cookies
		}
	}

	constructor(props){
		super();
		const {cookies, store} = props;
		store.dispatch(saveToken(cookies))
	}

	render() {
		const { Component, pageProps, store } = this.props
	
		return <Container>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Container>
	}
})

