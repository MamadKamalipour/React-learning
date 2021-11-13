import React from 'react';
import styles from './Card.module.css'
const Card = ({price , title , image, change24h , marketCap}) => { 
    return (
        <div className={styles.card}>
            <img className={styles.cardimg} src={image} alt="crypto Logo"/>
            <h2>{title}</h2>
            <p>${price.toLocaleString()}</p>
            <p className={change24h > 0 ? styles.greenPrice : styles.redPrice}>%{change24h.toFixed(2)}</p>
            <span>${marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Card;