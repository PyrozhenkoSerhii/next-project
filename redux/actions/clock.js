import {clockTypes} from '../costants/actionTypes';

export const serverRenderClock = (isServer) => dispatch => {
    console.log('server tick');
    return dispatch({ type: clockTypes.TICK, light: !isServer, ts: Date.now() })
};

export const startClock = dispatch => {
    console.log('client tick loop');
    return setInterval(() => {
        dispatch({ type: clockTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
};