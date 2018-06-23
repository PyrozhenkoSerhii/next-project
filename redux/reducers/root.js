import {combineReducers} from 'redux';

import clock from './clock';
import product from './product';
import user from './user';

export default combineReducers({
    clock,
    product,
    user
})
