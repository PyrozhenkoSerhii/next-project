import {UPLOAD_PRODUCTS, SET_COUNT} from "../costants/actionTypes";

export const setCount = (productCount) => ({type: SET_COUNT, payload: productCount});
export const uploadProducts = (products) => ({type: UPLOAD_PRODUCTS, payload: products});