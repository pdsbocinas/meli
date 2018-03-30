import React, { Component } from 'react';
import ServicesLocal from '../../Services/ServicesLocal'
import ItemView from './ItemView'
import './ItemsView.css'

let services = new ServicesLocal();

export default class ItemsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      query: '',
      error: ''
    };
  }

  getProducts () {
    services.searching(this.props.location.search).then(response => {
      this.setState({
        products: response.data.items,
        categories: response.data.categories
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
          {this.state.categories &&
          <div className="container__breadcrumb">
            <ol>
                {this.state.categories.map((item,index) => {
                    return <li key={index}>{item}</li>
                })}
            </ol>
          </div>
          }
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
