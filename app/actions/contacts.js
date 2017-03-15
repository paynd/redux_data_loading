import getContacts from '../util/network'

export const LOAD_CONTACTS = 'LOAD_CONTACTS'
export const LOAD_CONTACTS_SUCCESS = 'LOAD_CONTACTS_SUCCESS'
export const LOAD_CONTACTS_ERROR = 'LOAD_CONTACTS_ERROR'


export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: LOAD_CONTACTS })
    getContacts()
      .then(contacts => dispatch({ type: LOAD_CONTACTS_SUCCESS, contacts }))
      .catch(error => dispatch({ type: LOAD_CONTACTS_ERROR, error }))
  }
}