import React, { Component } from "react";

export default class Cevent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "option1",
    };
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  optionHandler = (event) => {
    this.setState({
      ...this.state,
      option: event.target.value,
    });
  };
  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state.option)
    console.log(this.state.text)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <br />
        <select value={this.state.option} onChange={this.optionHandler}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <br />
        <br />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}
