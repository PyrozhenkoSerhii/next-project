import {SAVE_MY_DATA, DATA_LOAD_SUCCESS} from '../costants/actionTypes';

export const saveMyData = data => {
    const id = Math.random() * 100;
    //const id = uuid();
    return {type: actionTypes.SAVE_MY_DATA, payload: {[id]: data}};
};

export const loadSuccess = () => {
    return {type: actionTypes.DATA_LOAD_SUCCESS};
};