import React, { Component } from 'react';
import ServicesLocal from '../Services/ServicesLocal'

let services = new ServicesLocal();

export default class ItemView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemId: props.match.params.id,
      product: []
    };
  }

  getProducts () {
    services.fetchingProduct(this.state.itemId).then(response => {
      this.setState({
        product: response.data.item,
        amount: response.data.item.price.amount
      });
      console.log(this.state.product.price.amount)
    }).catch(error => {
      console.log(error)
    })
  }

  componentDidMount () {
    this.getProducts();
  }


  render() {
    return (
      <div className="container">
          <div className="container">
            <div>
              <img src={this.state.product.picture} alt=""/>
            </div>
            <div>
              <p>{this.state.product.condition} - {this.state.product.sold_quantity}</p>
              <h2>{this.state.product.title}</h2>
              <span>{this.state.amount}</span>
              <div className="btn-buy">
                <a className="btn-buy">Comprar</a>
              </div>
            </div>
            <div>
              <h3>Descripción del producto</h3>
              <div dangerouslySetInnerHTML={{ __html: this.state.product.description }} />
            </div>
          </div>


      </div>
    );
  }
}
