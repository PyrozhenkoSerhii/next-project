import {UPLOAD_PRODUCTS, SET_COUNT} from "../costants/actionTypes";

const initialState = {
    productState: [],
    products: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {...state, productState: [...state.productState, action.payload]};
        case UPLOAD_PRODUCTS:
            console.log('payload', action.payload);
            return {...state, products: action.payload};
        default:
            return state;
    }
}