import {combineReducers} from 'redux';

import {LOGOUT} from "../costants/actionTypes";
import clock from './clock';
import product from './product';
import user from './user';

export const rootReducer =
    (state, action) =>
        combineReducers({
            clock,
            product,
            user
        })(action.type === LOGOUT ? undefined : state, action);

