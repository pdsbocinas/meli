import express from 'express'
import Services from '../../Services/Services';

const router = express.Router();
let services = new Services()

const author = {
  name: 'Pablo',
  lastname: 'Sanchez'
}

function mapper (item) {
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
  let request = req
  let results = Promise.all([services.fetchId('MLA672112649'), services.fetchDescription('MLA672112649')])

  results.then ( ([item, description]) => {
    let product = item.data
    let productDescription = description.data
    res.json(Object.assign({},
      {author},
      {
        item: Object.assign({}, mapper(product), {
          sold_quantity: product.sold_quantity,
          description: productDescription.text
        })
      }
    ))
  }).catch((e) => {
    error = e
  })

});

module.exports = router;
