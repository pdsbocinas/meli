import axios from 'axios';

export default class HttpClient {
  constructor (baseUrl) {
    this.$http = axios.create({baseURL: baseUrl})
  }

  get (url) {
    return handleRequest(this.$http.get(url))
  }
}

function handleRequest (request) {
  return new Promise((resolve, reject) => {
    request.then((response) => {
      if (response.status) {
        return resolve(response)
      }
      reject(response.data)
    }, reject)
  })
}
