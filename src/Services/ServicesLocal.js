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

  fetchingProduct (productId, categoryId) {
    return this.apiLocal.fetchingProduct({
      productId: productId,
      categoryId: categoryId
    })
  }
}

