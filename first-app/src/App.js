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
  render() {
    const items = {
      item1: {
        img: img1,
        alt:"img1",
        title: "Item 1",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 29.99,
      },
      item2: {
        img: img2,
        alt:"img2",
        title: "Item 2",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 49.99,
      },
      item3: {
        img: img3,
        alt:"img3",
        title: "Item 3",
        desc: "this is a test for items Desription this is a test for items Desription this is a test for items Desription",
        price: 149.99,
      },
    };
    return (
      <div className="layout">
        <Navbar />
        <Banner />
        <Cards>
          <Card
            img={ items.item1.img}
            alt= { items.item1.alt}
            title= { items.item1.title}
            desc={ items.item1.desc}
            price={ items.item1.price}
          />
          <Card
           img={ items.item2.img}
            alt= { items.item2.alt}
            title= { items.item2.title}
            desc={ items.item2.desc}
            price={ items.item2.price}
          />
          <Card
           img={ items.item3.img}
            alt= { items.item3.alt}
            title= { items.item3.title}
            desc={ items.item3.desc}
            price={ items.item3.price}
          />
        </Cards>
      <CallToAction/>
      <BrandsSlider/>
      <Footer/>
      </div>
    );
  }
}
export default App;
