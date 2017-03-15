import { LOAD_CONTACTS, LOAD_CONTACTS_SUCCESS, LOAD_CONTACTS_ERROR } from '../actions/contacts'

const initialState = {
  isLoading: false,
  result: [],
}

export default function contacts(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_CONTACTS_SUCCESS:
      return {
        ...state,
        result: [...state.result, ...action.contacts],
        isLoading: false,
      }
    case LOAD_CONTACTS_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
