import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import product from './product';
import user from './user';

const productPersistConfig = {
    key: 'product',
    storage,
    blacklist: ['products'],
    autoMergeLevel2,

}

const persistConfig = {
    key: 'root',
    storage,
    autoMergeLevel2,
    blacklist: ['product']
};

const rootReducer = combineReducers({
    product: persistReducer(productPersistConfig, product),
    user
});

export default persistReducer(persistConfig, rootReducer);
