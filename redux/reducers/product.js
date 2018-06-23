import {SET_COUNT} from "../costants/actionTypes";

const initialState = {
    productCount: 0
};

export default function productReducer(state = initialState, action){
    switch (action.type){
        case SET_COUNT:
            return {...state, productCount: action.payload};
        default:
            return state;
    }
}