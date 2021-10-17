import React from 'react'
import styles from "./Navbar.module.css"
import Logo from "../../Images/logo.png" 

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#productsSection">Product</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
            <div className={styles.logoWrapper}>
            <a href="/"><img className={styles.logo} src={Logo} alt="Logo"/></a>
            </div>
        </header >
    )
}
