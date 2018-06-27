// import thunk from 'redux-thunk'
// import {createStore, applyMiddleware} from 'redux';
// import {rootReducer} from '../reducers/root';
// import {logger} from '../middleware/logger';
//
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//
// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     stateReconciler: autoMergeLevel2
// };
//
// const pReducer = persistReducer(persistConfig, rootReducer);
//
// export default (initialState = {}) => {
//     console.log('creating store');
//     // const store = createStore(pReducer, initialState, applyMiddleware(logger, thunk));
//     const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
//     // const persistor = persistStore(store);
//     // return {store, persistor};
//     return store;
// }

import clientStore from './clientStore';
import serverStore from './serverStore';

const _initialState = {
    myData: {},
    status: {loaded: false, err: false}
};

export default (initialState = _initialState, props) => {
    if(props.isServer) {
        return serverStore(initialState, props)
    } else {
        return clientStore(initialState, props);
    }
}