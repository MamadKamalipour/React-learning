import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import CallToAction from "./Components/CallToAction/CallToAction";
import BrandsSlider from "./Components/BrandsSlider/BrandsSlider";
import Footer from "./Components/Footer/Footer";
import "./App.css";
class App extends Component {


  render() {
    return (
      <div className="layout">
        <Navbar />
        <Banner />
        <Cards/>
        <CallToAction />
        <BrandsSlider />
        <Footer />
      </div>
    );
  }
}
export default App;
