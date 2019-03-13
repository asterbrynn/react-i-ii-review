import React, { Component } from 'react';
import './App.css';
import Mentor from './mentor'


class App extends Component {
  constructor() {
    super()
    this.setState({
      friends = [{id: 1, name: "Ellie", age: 27}, {id: 2, name: "Murphy", age: 23}]
    })
  }
  render() {
    return (
      <div className="App">
        <Mentor/>
        <User friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
