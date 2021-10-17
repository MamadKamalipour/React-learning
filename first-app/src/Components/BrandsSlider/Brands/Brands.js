import React from 'react'
import styles from './Brands.module.css'
export default function Brands(props) {
    return (
        
            <img className={styles.brandImage} src={props.img} alt={props.alt} />
        
    )
}
