import xml from 'xml2js'

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'
const CAT_URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=10&size=small'

export default function getListOfImages() {
  return fetch(CAT_URL)
    .then(res => res.text())
    .then(text => xml.parseString(text))
    .catch((error) => {
      console.error(error)
    })
}
