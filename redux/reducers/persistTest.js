import {actionTypes} from "../costants/actionTypes";

export default (state = {loaded: false}, action) => {
    switch (action.type) {
        case actionTypes.DATA_LOAD_SUCCESS:
            return {loaded: true};
        case actionTypes.SAVE_MY_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

