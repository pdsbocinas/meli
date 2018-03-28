import HttpClient from './HttpClient'

const URL_LOCAL = 'http://localhost:3001/api/items'

const API = {
  search: URL_LOCAL + '?q=:query',
  productId: URL_LOCAL + '/:productId'
}

export default class Api {

  constructor () {
    this.$http = new HttpClient(URL_LOCAL)
  }

  search (params) {
    return this.$http.get(this.buildUrl('search', params))
  }

  fetchingProduct (params) {
    return this.$http.get(this.buildUrl('productId', params))
  }

  buildUrl (action, params, path) {
    let url = API[action] + (path || '');
    for (let name of Object.keys(params)) {
      if (url.indexOf(':' + name) !== -1) {
        url = url.replace(':' + name, params[name])
      }
    }
    return url
  }
}
