import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/root';
import { logger } from './middleware/logger';


export default (initialState = {}) => {
    const isServer = typeof window === 'undefined';
    let composeEnhancers;

    if (!isServer) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    } else {
        composeEnhancers = compose
    }

    const date = new Date();
    console.log(`>> Creating store ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}(${date.getMilliseconds()})`);

    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}
