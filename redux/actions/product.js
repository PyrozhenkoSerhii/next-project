import {DELETE_FROM_ORDER, UPLOAD_PRODUCTS, ORDER_PRODUCT, UPDATE_ORDER} from "../costants/actionTypes";

export const orderProduct = (product) => ({type: ORDER_PRODUCT, payload: product});
export const updateOrder = (product) => ({type: UPDATE_ORDER, payload: product});
export const uploadProducts = (products) => ({type: UPLOAD_PRODUCTS, payload: products});
export const remove = (id) => ({type: DELETE_FROM_ORDER, payload: id});