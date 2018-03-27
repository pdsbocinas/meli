import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="item-container">
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.price}</p>
          <p>{this.props.description}</p>
          <img src={this.props.picture} alt=""/>
        </div>
        <Link to={`/items/${this.props.id}`}>
          <span className="item-title">
            {this.props.title}
          </span>
        </Link>
      </div>
    );
  }
}
