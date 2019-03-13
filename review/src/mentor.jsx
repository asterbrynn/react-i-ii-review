import React, { Component } from "react";

class Mentor extends Component {
  componentDidUpdate() {
    console.log("Logan saved the day!");
  }
  render() {
    return (
      <div>
        <h1>Logan Mace</h1>
        <h2>{this.props.questions.length}</h2>
        <h3>questions to answer</h3>
        <button onClick={this.props.answerQuestion}>Answer a question!</button>
      </div>
    );
  }
}