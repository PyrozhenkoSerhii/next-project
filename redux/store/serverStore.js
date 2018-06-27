import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/root';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';

export default (initialState, {isServer}) => {
    return createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
}