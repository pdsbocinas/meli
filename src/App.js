import React, { Component } from 'react';
import SearchView from './Components/SearchView/SearchView';
import ItemsView from './Components/ItemsView/ItemsView';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

export default class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Route path="/" component={SearchView} />
        <Switch>
          <Route exact path="/items" component={ItemsView} />
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
      </div>
    );
  }
}
