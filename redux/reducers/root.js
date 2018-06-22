import clockTypes from '../costants/actionTypes';

export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case clockTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            });
        case clockTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case clockTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case clockTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            });
        default: return state
    }
}
