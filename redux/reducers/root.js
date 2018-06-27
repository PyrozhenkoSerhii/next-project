import {combineReducers} from 'redux';

import {LOGOUT} from "../costants/actionTypes";
import clock from './clock';
import product from './product';
import user from './user';
import persistTest from './persistTest';

// export const rootReducer =
//     (state, action) =>
//         combineReducers({
//             clock,
//             product,
//             user,
//             persistTest
//         })(action.type === LOGOUT ? undefined : state, action);

export default combineReducers({
    clock,
    product,
    user,
    persistTest
});

