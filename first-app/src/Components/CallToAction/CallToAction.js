import React from 'react'
import styles from './CallToAction.module.css'
import searchIcon from "../../Images/search-solid.svg"
export default function CallToAction() {
    return (
        <div id="callToAction" className={styles.callToAction}>
        <h3 className={styles.callToActionTitle}>Search What You Want</h3>
        <div className={styles.inputWrapper}>
        <input type="text" className={styles.callToActionInput} /> 
        <div className={styles.inputPlaceholder}>
        <img className={styles.callToActionSearch} src = {searchIcon} alt = "search icon"/>
        <span className={styles.placeholder}>Search</span>
        </div>
        <i id="loader" className={styles.spinner +" fa fa-spinner fa-spin"}></i>
        </div>
        </div>
    )
}
