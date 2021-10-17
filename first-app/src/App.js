import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Card from "./Components/Card/Card";
import CallToAction from "./Components/CallToAction/CallToAction";
import BrandsSlider from "./Components/BrandsSlider/BrandsSlider";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
class App extends Component {
  state = {
    items: [
      {
        img: img1,
        alt: "img1",
        title: "Item 1",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 29.99,
      },
      {
        img: img2,
        alt: "img2",
        title: "Item 2",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 49.99,
      },
      {
        img: img3,
        alt: "img3",
        title: "Item 3",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 149.99,
      },

      {
        img: img3,
        alt: "img3",
        title: "Item 3",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 149.99,
      },
    ],
  };

  render() {
    return (
      <div className="layout">
        <Navbar />
        <Banner />
        <Cards>
          {this.state.items.map((item) => (
            <Card
              img={item.img}
              alt={item.alt}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </Cards>
        <CallToAction />
        <BrandsSlider />
        <Footer />
      </div>
    );
  }
}
export default App;
