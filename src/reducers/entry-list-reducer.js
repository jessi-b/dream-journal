import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {
  case c.DELETE_ENTRY:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};