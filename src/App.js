import React, { Component } from 'react';
import SearchView from './Components/SearchView';
import ItemsView from './Components/ItemsView';
import ItemDetail from './Components/ItemDetail';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div id="">
        <Route path="/" component={SearchView} />
        <Switch>
          <Route exact path="/items" component={ItemsView} />
          <Route path="/items/:id" component={ItemDetail} />
        </Switch>
      </div>
    );
  }
}
