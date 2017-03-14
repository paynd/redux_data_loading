import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  images:[
    "http://placehold.it/150/771796",
    "http://placehold.it/150/24f355",
    "http://placehold.it/150/d32776",
  ]
};

export default function loader(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_COMPLETED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
