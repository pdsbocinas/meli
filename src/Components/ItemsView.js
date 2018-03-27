import React, { Component } from 'react';
import ServicesLocal from '../Services/ServicesLocal'
import ItemView from './ItemView'
let services = new ServicesLocal();

export default class ItemsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      query: this.props.location.search
    };
  }

  getProducts () {
    services.searching(this.state.query).then(response => {
      this.setState({
        products: response.data.items
      });
    }).catch(error => {
      console.log(error)
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
      <div className="item-container">
        <div>
          {this.state.products.map((item,index) => {
            return (
              <ItemView
                key={index}
                id={item.id}
                title={item.title}
                price={item.price.amount}
                description={item.title}
                picture={item.picture}
              />
            )
          })}
        </div>
      </div>
    );
  }
}
