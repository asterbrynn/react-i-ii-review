import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsAsked: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ questionsAnswered: this.state.questionsAsked + 1 });
  }
  render() {
    <div className="student-container">
      boop
    </div>;
  }
}