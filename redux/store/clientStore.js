import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/root';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {loadSuccess} from "../actions/persistTest";

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (initialState) => {
    const store = createStore(persistedReducer, initialState, applyMiddleware(logger, thunk));

    setTimeout(() => {
        persistStore(store, null, () => {
            store.dispatch(loadSuccess());
        });

        persistStore(store);

    }, 3000);

    return store;
}