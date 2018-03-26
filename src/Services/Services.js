import Api from '../Api/Api'

export default class Services {
  constructor () {
    this.api = new Api()
  }

  search (query) {
    return this.api.search({
      query: query
    })
  }

  fetchId (itemId) {
    return this.api.fetchId({
      id: itemId
    })
  }

  fetchDescription (itemId) {
    return this.api.fetchDescription({
      id: itemId
    })
  }

  fetchSearchItem (queryItem) {
    return this.api.fetchSearchItem ({
      queryItem: queryItem
    })
  }

  fetchItem (itemId) {
    return this.api.fetchSearchItem ({
      id: itemId
    })
  }
}
