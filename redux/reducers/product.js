import {DELETE_FROM_ORDER, UPLOAD_PRODUCTS, ORDER_PRODUCT, UPDATE_ORDER} from "../costants/actionTypes";

const initialState = {
    productState: [],
    products: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ORDER_PRODUCT:
            return {...state, productState: [...state.productState, action.payload]};
        case UPDATE_ORDER:
            const newState = state.productState.filter(el => el.id !== action.payload.id);
            return {...state, productState: [...newState, action.payload]};
        case UPLOAD_PRODUCTS:
            return {...state, products: action.payload};
        case DELETE_FROM_ORDER:
            return {...state, productState: state.productState.filter(el => el.id !== action.payload)};
        default:
            return state;
    }
}