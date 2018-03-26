import React, { Component } from 'react';

export default class ItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId: props.match.params.id
    };

    this.search = this.search.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.search();
  }

  search() {

  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Modulo de compra no desarrollado :P');
    alert('Buh!');
  }

  render() {
    return (
      <div className="item-container">
        Soy el item
      </div>
    );
  }
}
