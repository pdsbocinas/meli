import HttpClient from './HttpClient'

const MODULE_URL = 'https://api.mercadolibre.com'

const API = {
  search: MODULE_URL + '/sites/MLA/search?q=:query',
  fetchId: MODULE_URL + '/items/:id',
  fetchDescription: MODULE_URL + '/items/:id/description',
  fetchCategories: MODULE_URL + '/categories/:categoryId'
};

export default class Api {

  constructor () {
    this.$http = new HttpClient(MODULE_URL)
  }

  search (params) {
    return this.$http.get(this.buildUrl('search', params))
  }

  fetchId (params) {
    return this.$http.get(this.buildUrl('fetchId', params))
  }

  fetchDescription (params) {
    return this.$http.get(this.buildUrl('fetchDescription', params))
  }

  fetchCategories (params) {
    return this.$http.get(this.buildUrl('fetchCategories', params))
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
