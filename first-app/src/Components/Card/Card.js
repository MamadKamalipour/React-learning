import React, { Component } from "react";
import styles from "./Card.module.css";
import downArrow from "../../Images/down.svg";
import upArrow from "../../Images/up.svg";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  downHandler = () => {
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    const { img, alt, title, desc, price } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.card}>
        <img src={img} alt={alt} className={styles.cardImg} />
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>This is a {title}</h3>
          <p>{desc}</p>
          <div className={styles.cardFooter}>
            <span className={styles.cardPrice}>{price} {counter ? `* ${counter} = ${counter * price}` : ""}  $</span>

            <div className={styles.counter}>
              <img
                src={downArrow}
                alt="down Arrow"
                className={this.state.counter===0 ? styles.disable : styles.downArrow} 
                onClick={this.downHandler}
              />
              <span>{counter}</span>
              <img
                src={upArrow}
                alt="up Arrow"
                className={this.state.counter===10 ? styles.disable : styles.upArrow} 
                onClick={ this.state.counter!==10 && this.upHandler}
              />
            </div>
            {/* <button className={styles.AddToCard}>Add To Card</button> */}
          </div>
        </div>
      </div>
    );
  }
}
