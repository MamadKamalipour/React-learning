import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import {v4 }from "uuid"
import img1 from "./../../Images/1.jpg";
import img2 from "./../../Images/2.jpg";
import img3 from "./../../Images/3.jpg";
export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    //   const {img, alt, title, desc, price } = this.state.items;
    return (
      <div className={styles.cards}>
        {this.state.items.map((item) => (
          <Card
            img={item.img}
            alt={item.alt}
            title={item.title}
            desc={item.desc}
            price={item.price}
            key={v4()}
          />
        ))}
      </div>
    );
  }
}
