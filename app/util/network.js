// const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'
// const CAT_URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=10&size=small'
const PERSON_URL = 'https://randomuser.me/api/?results=20'

export default function getContacts() {
  return fetch(PERSON_URL)
    .then(res => res.json())
    .then(data => data.results)
}
