import React, { Component } from 'react';
import SearchView from './Components/SearchView';
import ItemsView from './Components/ItemsView';
import ItemView from './Components/ItemView';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isToggleOn: true,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

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
          <Route path="/items/:id" component={ItemView} />
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </Switch>
      </div>
    );
  }
}

export default App;
