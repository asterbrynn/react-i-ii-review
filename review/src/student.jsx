import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsAsked: 0,
      questionsAnswered: 0
    };
  }
  handleClick= () => {
    this.setState({ questionsAsked: this.state.questionsAsked + 1 });
    console.log(this.studentInput)
    this.setState(this.state.askQuestion(this.studentInput.value));
  }
  render() {
    return <div className="student-container">
      {this.state.questionsAnswered} questions answered
      <br/>
      <br/>
      <input type="text" name="studentInput" placeholder="Type question here"/>
      <button onClick={() => this.handleClick()}>Ask</button>
      <br/>
      {this.state.questionsAsked} questions asked
    </div>;
  }
}