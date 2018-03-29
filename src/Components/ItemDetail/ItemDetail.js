import React, { Component } from 'react';
import ServicesLocal from '../../Services/ServicesLocal'
import './ItemDetail.css'

let services = new ServicesLocal();

export default class ItemView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: [],
      amount: '',
      error: '',
      sold_quantity: '',
      condition: '',
      categories: []
    };
  }

  componentDidMount () {
    this.getProducts();
  }

  getProducts () {
    services.fetchingProduct(this.props.match.params.id).then(response => {
      this.setState({
        product: response.data.item,
        amount: new Intl.NumberFormat("es-AR",{style: "currency", currency: response.data.item.price.currency, minimumFractionDigits: 0}).format(response.data.item.price.amount),
        sold_quantity: response.data.item.sold_quantity > 1 || response.data.item.sold_quantity === 0  ? response.data.item.sold_quantity + ' vendidos' : response.data.item.sold_quantity + ' vendido',
        condition: response.data.item.condition === 'new' ? 'Nuevo - ' : 'Usado - ',
        categories: response.data.categories
      });
    }).catch(error => {
      this.setState({
        error: error
      })
  })
  }

  render() {
    return (
      <div className="container_detail">
        {this.state.categories &&
        <div className="container__breadcrumb">
          <ol>
          {this.state.categories.map((item,index) => {
              return <li key={index}>{item}</li>
          })}
          </ol>
        </div>
        }
        <div className="item__images-detail">
          <img src={this.state.product.picture} alt={this.state.product.title}/>
        </div>
        <div className="container__item-description-detail">
          <p>{this.state.condition} {this.state.sold_quantity}</p>
          <h2>{this.state.product.title}</h2>
          <span>{this.state.amount}</span>
          <a className="btn-buy">Comprar</a>
        </div>
        <div className="container__item-product-detail">
          <h3>Descripción del producto</h3>
          <div dangerouslySetInnerHTML={{ __html: this.state.product.description }} />
        </div>
      </div>
    )
  }
}
