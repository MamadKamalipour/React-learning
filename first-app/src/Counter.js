import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  upOne = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };
  upThree = () => {
    this.upOne();
    this.upOne();
    this.upOne();
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.upThree}> Change </button>
      </div>
    );
  }
}
