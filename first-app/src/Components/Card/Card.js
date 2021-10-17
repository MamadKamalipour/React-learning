import React from "react";
import styles from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} alt={props.alt} className={styles.cardImg} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>This is a {props.title}</h3>
        <p>{props.desc}</p>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>{props.price}$</span>
          <button className={styles.AddToCard}>Add To Card</button>
        </div>
      </div>
    </div>
  );
}
