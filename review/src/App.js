import React, { Component } from 'react';
import './App.css';
import Mentor from './mentor';
import User from './user';
import Student from './student';


class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [{id: 1, name: "Ellie", age: 27}, {id: 2, name: "Murphy", age: 23}],
      questions: []
    }
  }
  answerQuestion = i => {
    let questions = [...this.state.questions];
    questions.splice(i, 1);
    this.setState({questions})
  }
  askQuestion = newQuestion => {
    const questions = [...this.state.questions, newQuestion];
    this.setState({questions});
  }
  render() {
    return (
      <div className="App">
        <Mentor questions={this.state.questions}
            answerQuestion={this.state.answerQuestion}/>
        <Student  questions={this.state.questions}
            askQuestion={this.state.askQuestion}/>
        {/* <User friends={this.state.friends}/> */}
      </div>
    );
  }
}

export default App;
