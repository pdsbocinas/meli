import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Logo from '../Resources/images/Logo.png'

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: '',
      id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const search = event.target.value;
    this.setState({
      search
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let route = '/';

    if (this.state.search !== '') {
      let query = queryString.stringify({
        q: this.state.search
      });

      route = `/items?${query}`;
    }

    this.props.history.push(route);
  }

  render() {
    return (
      <header className="navbar search">
        <div className="container">
          <div className="flex-container align-center">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Mercado Libre" width="100%" height="auto" />
            </Link>
            <form onSubmit={this.handleSubmit}>
              <div className="flex-container">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nunca dejes de buscar"
                  onChange={this.handleChange}
                  value={this.state.search}
                />
                <div className="">
                  <button className="btn" type="submit"></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
