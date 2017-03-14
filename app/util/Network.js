
export default function getListOfImages() {
  const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
  return fetch(photosUrl)
    .then((response) => {
      console.log(`Response: ${response.status}`) // 200
      return response
    }).catch((error) => {
      console.error(error)
    })
}
