import React, { Component } from 'react';
import ServicesLocal from '../Services/ServicesLocal'
import ItemView from './ItemView'
let services = new ServicesLocal();

export default class ItemsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      query: '',
      error: ''
    };
  }

  getProducts () {
    services.searching(this.props.location.search).then(response => {
      this.setState({
        products: response.data.items
      });
    }).catch(error => {
      this.setState({
        error: error
      })
    })
  }

  componentDidMount () {
    this.getProducts();
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      query: newProps.location.search
    });
    this.getProducts();
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.products.map((item,index) => {
            return (
              <ItemView
                key={index}
                id={item.id}
                title={item.title}
                price={new Intl.NumberFormat("es-AR",{style: "currency", currency: item.price.currency, minimumFractionDigits: 0}).format(item.price.amount)}
                description={item.title}
                picture={item.picture}
                free_shipping={item.free_shipping}
              />
            )
          })}
        </div>
      </div>
    );
  }
}
