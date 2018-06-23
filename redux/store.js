import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root';
import {logger} from './middleware/logger';

export default (initialState = {}) => {
    console.log('creating store');
    return createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
}
