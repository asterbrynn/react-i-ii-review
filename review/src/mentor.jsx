import React, { Component } from "react";

export default class Mentor extends Component {
  render() {
    return (
      <div>
        <h1>The Queue</h1>
        <h2>{this.props.questions.length}
        <br/>
        questions to answer</h2>
        <h3>Logan saved the day!</h3>
        <button onClick={() => this.props.answerQuestion(this.props.questions.length - 1)}>Answer a question!</button>
      </div>
    );
  }
}