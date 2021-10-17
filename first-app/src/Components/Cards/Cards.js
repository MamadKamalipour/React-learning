import React from 'react'
import styles from './Cards.module.css'
export default function Cards(props) {
    return (
        <div id="productsSection" className={styles.cards}>
            {props.children}
        </div>
        
    )
}
