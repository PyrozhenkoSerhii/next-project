import App from 'next/app'
import initializeStore from '../redux/store';

const isServer = typeof window === 'undefined';
const REDUX_STORE = 'REDUX_STORE';

function getOrCreateStore(initialState){
    if(isServer){
        return initializeStore(initialState);
    }
    if(!window[REDUX_STORE]){
        window[REDUX_STORE] = initializeStore(initialState);
    }

    return window[REDUX_STORE];
}

export default (App) => {
    return class Redux extends React.Component {
        static async getInitialProps(context){
            const store = getOrCreateStore();

            context.ctx.reduxStore = store;

            let appProps = {};
            if(typeof App.getInitialProps === 'function'){
                appProps = await App.getInitialProps.call(App,context);
            }

            return {
                ...appProps,
                initialReduxState: store.getState()
            }
        }
        constructor(props){
            super(props);
            this.reduxStore = getOrCreateStore(props.initialReduxState);
        }

        render(){
            return(
                <App {...this.props} reduxStore={this.reduxStore}/>
            );
        }
    }


}
