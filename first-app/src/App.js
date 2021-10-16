import React, { Component } from "react";

class App extends Component {
  num = 10;
  render() {
    return (
      <>
        <div className="container">
          <h1>Mammad K9</h1>
          <h2>Mutiple: {this.num * 8} </h2>
        </div>
      </>
    );
  }
}
export default App;
