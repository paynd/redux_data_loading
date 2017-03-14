import * as types from './actionTypes';

export function loadStarted() {
  return {
    type: types.LOAD_STARTED
  };
}

export function loadCompleted() {
  return {
    type: types.LOAD_COMPLETED
  };
}
