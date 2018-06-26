import {clockTypes} from '../costants/actionTypes';

// todo: rework async actions
export const serverRenderClock = (isServer) => dispatch => {
    return dispatch({ type: clockTypes.TICK, light: !isServer, ts: Date.now() })
};

export const startClock = dispatch => {
    return setInterval(() => {
        dispatch({ type: clockTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
};