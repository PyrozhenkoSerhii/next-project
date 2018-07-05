import {SAVE_TOKEN, SAVE_USER, DELETE_TOKEN, TEST_SERVER_REDUX} from "../costants/actionTypes";

export const saveUser = (user) => ({type:SAVE_USER, payload: user});
export const saveToken = (token) => ({type: SAVE_TOKEN, payload: token});
export const deleteToken = () => ({type: DELETE_TOKEN});
export const testServerRedux = () => ({type: TEST_SERVER_REDUX, payload: {'redux':'server'}});