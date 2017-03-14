import { LOAD_IMG, LOAD_IMG_SUCCESS } from '../actions/images';

const initialState = {
  isLoading: false,
  result:[
    "http://placehold.it/150/771796",
    "http://placehold.it/150/24f355",
    "http://placehold.it/150/d32776",
  ]
};

export default function images(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_IMG:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_IMG_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
