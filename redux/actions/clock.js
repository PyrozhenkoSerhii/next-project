import {clockTypes} from '../costants/actionTypes';

export const serverRenderClock = (isServer) => dispatch => {
    return dispatch({ type: clockTypes.TICK, light: !isServer, ts: Date.now() })
};

export const startClock = dispatch => {
    return setInterval(() => {
        dispatch({ type: clockTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
};

export const incrementCount = () => dispatch => {
    return dispatch({ type: clockTypes.INCREMENT })
};

export const decrementCount = () => dispatch => {
    return dispatch({ type: clockTypes.DECREMENT })
};

export const resetCount = () => dispatch => {
    return dispatch({ type: clockTypes.RESET })
};
