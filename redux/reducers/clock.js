import {clockTypes} from '../costants/actionTypes';

const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
};

export default function reducer(state = exampleInitialState, action){
    switch (action.type) {
        case clockTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            });
        default: return state
    }
}
