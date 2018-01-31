import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';

// action types
const TEST_ACTION = 'base/TEST_ACTION';

// action creator
export const doTestAction = createAction(TEST_ACTION); // test redux

// initial state
const initialState = Map({
  test: Map({
    mode: false
  })
});

// reducer
export default handleActions({
  [TEST_ACTION]: (state, action) => {
    return state.setIn(['test', 'mode'], true);
    // return state.setIn(['test', 'mode'], action.payload);
  }
}, initialState);