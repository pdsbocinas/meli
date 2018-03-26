import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'pelucas',
      id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const search = event.target.value;
    console.log(this.state.search)
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
    let self = this;
    axios.get(`/api/items?q=${this.state.search}`)
      .then(function (response) {
        self.state.id = response.data.items[0].id
        console.log(self.state.id)
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(`/api/items/${this.state.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <header className="navbar search-bar" role="navigation">
        <div className="action-container d-flex justify-content-center">
          {/*<!--Link className="navbar-brand" to="/">*/}
            {/*<img src={Logo} alt="Mercado Libre" width="53" height="36" />*/}
          {/*</Link-->*/}
          <form onSubmit={this.handleSubmit} className="form-inline col-7">
            <div className="input-group col">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Nunca dejes de buscar"
                onChange={this.handleChange}
                value={this.state.search}
              />
              <div className="input-group-btn">
                <button className="btn" type="submit">Buscar</button>
              </div>
            </div>
          </form>
        </div>
      </header>
    );
  }
}
