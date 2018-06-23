import {SAVE_TOKEN, SAVE_USER} from "../costants/actionTypes";

const initialState = {
    user: [],
    token: ''
};

export default function userReducer(state = initialState, action) {
    switch (action.type){
        case SAVE_USER:
            return {...state, user: action.payload};
        case SAVE_TOKEN:
            return {...state, token: action.payload};
        default:
            return state;
    }
}