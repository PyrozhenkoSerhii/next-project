export const logger = store => next => action => {
    //console.log('dispatching', action.type);
    let result = next(action);
    //console.log('new state', store.getState());
    return result;
};