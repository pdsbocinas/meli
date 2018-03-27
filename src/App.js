import React, { Component } from 'react';
import SearchView from './Components/SearchView';
import ItemsView from './Components/ItemsView';
import ItemDetail from './Components/ItemDetail';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({
      value
    });
  }

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

export default App;
