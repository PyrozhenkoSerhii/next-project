import {SAVE_TOKEN, SAVE_USER} from "../costants/actionTypes";

export const saveUser = (user) => ({type:SAVE_USER, payload: user});
export const saveToken = (token) => ({type: SAVE_TOKEN, payload: token});