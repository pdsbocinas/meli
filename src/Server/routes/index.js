import express from 'express'
import Services from '../../Services/Services';

const router = express.Router();
let services = new Services()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

router.get('/', (req, res, next) => {
  let error = ''
  let request = req.query.q
  services.search(request).then( (response) => {
    let items = response.data.results.slice(0, 4).map(mapper)
    res.json(Object.assign({},{author,items}))
  }).catch((e) => {
    error = e
  });
});

router.get('/:id', (req, res, next) => {
  let error = ''
  let request = req.params.id
  let results = Promise.all([services.fetchId(request), services.fetchDescription(request)])

  results.then (([item, description]) => {
    services.fetchCategories(item.data.category_id).then( response => {

      let categories = response.data.path_from_root.map(categoryMapper)
      let product = item.data
      let productDescription = description.data

      res.json(Object.assign({},
        {author},
        {
          item: Object.assign({}, mapper(product), {
            sold_quantity: product.sold_quantity,
            description: productDescription.text
          })
        },
        {categories}
      ))
    })
  }).catch((e) => {
    error = e
  })
});

const author = {
  name: 'Pablo',
  lastname: 'Sanchez'
}

const mapper = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: Math.floor((item.price - Math.floor(item.price)) * 100)
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  }
}

const categoryMapper = (category) => category.name

module.exports = router;
