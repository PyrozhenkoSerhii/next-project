import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

import persistedRootReducer from './reducers/persistedRoot';
import rootReducer from './reducers/root';

import { persistStore } from 'redux-persist';

const makeConfiguredStore = (reducer, initialState) => {
    const isServer = typeof window === 'undefined';
    let composeEnhancers;

    if (!isServer) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    } else {
        composeEnhancers = compose
    }

    const date = new Date();
    console.log(`>> Creating store ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}(${date.getMilliseconds()})`);

    return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

export default (initialState, { isServer }) => {
    if (isServer) {
        return makeConfiguredStore(rootReducer, initialState);
    } else {
        const store = makeConfiguredStore(persistedRootReducer, initialState);

        store.__persistor = persistStore(store);

        return store;
    }
};
