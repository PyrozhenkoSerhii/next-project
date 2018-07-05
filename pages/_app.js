import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import initStore from '../redux/store'
import clientCookies from 'js-cookie';
import serverCookies from 'cookie';
import { saveToken } from '../redux/actions/user';
import socketIO from 'socket.io-client';

export default withRedux(initStore)(class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let cookies;

		if (ctx.req) {
			cookies = ctx.req.headers.cookie;

			if (typeof cookies === 'string') {
				const cookiesJSON = serverCookies.parse(cookies)
				const token = cookiesJSON.token;
			}

		} else {
			cookies = clientCookies.get('token');
		}

		return {
			pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
			cookies: cookies
		}
	}

	constructor(props) {
		super();
		const { cookies, store } = props;
		store.dispatch(saveToken(cookies))
		this.state = {
			socket: null
		}
	}

	componentDidMount() {
		const socket = socketIO('https://obscure-stream-46512.herokuapp.com/');
		this.setState({ socket });
	}

	componentWillUnmount() {
		this.state.socket.close()
	}

	render() {
		const { Component, pageProps, store } = this.props

		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} socket={this.state.socket} />
				</Provider>
			</Container>
		)
	}
})

