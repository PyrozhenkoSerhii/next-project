import {SAVE_TOKEN, SAVE_USER, DELETE_TOKEN, TEST_SERVER_REDUX} from "../costants/actionTypes";

const initialState = {
    user: [],
    token: undefined
};

export default function userReducer(state = initialState, action) {
    switch (action.type){
        case SAVE_USER:
            return {...state, user: action.payload};
        case SAVE_TOKEN:
            return {...state, token: action.payload};
        case DELETE_TOKEN:
            return {...state, token: undefined};
        case TEST_SERVER_REDUX:
            return {...state, server: action.payload};
        default:
            return state;
    }
}