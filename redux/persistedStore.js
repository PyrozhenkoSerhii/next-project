import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/root';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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

export default (initialState, { isServer, req, debug, storeKey }) => {
    if (isServer) {
        return makeConfiguredStore(rootReducer, initialState);
    } else {
        const persistConfig = {
            key: 'root',
            storage: storage,
            autoMergeLevel2
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = makeConfiguredStore(persistedReducer, initialState);

        store.__persistor = persistStore(store);

        return store;
    }
};
