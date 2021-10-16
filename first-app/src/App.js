import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import "./App.css"
class App extends Component {
  render() {
    return(
      
      <div className="layout">
        <Navbar/>
        <Banner/>
      </div>
      
      )
  }
}
export default App;
