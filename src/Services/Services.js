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

  fetchCategories (categoryId) {
    return this.api.fetchCategories({
      categoryId: categoryId
    })
  }
}
