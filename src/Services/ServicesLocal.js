import ApiLocal from '../Api/ApiLocal'

export default class ServicesLocal {

  constructor () {
    this.apiLocal = new ApiLocal()
  }

  searching (query) {
    return this.apiLocal.search({
      query: query
    })
  }

  fetchingProduct (productId) {
    return this.apiLocal.fetchingProduct({
      productId: productId,
    })
  }
}

