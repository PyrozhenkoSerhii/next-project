import {SET_COUNT} from "../costants/actionTypes";

const initialState = {
    productState: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {...state, productState: [...state.productState, action.payload]};
        default:
            return state;
    }
}