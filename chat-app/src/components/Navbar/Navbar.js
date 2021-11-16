import React from 'react';
import styles from "./Navbar.module.css"
const Navbar = ({logout}) => {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.name}>Chat App By Mammad Kamalipour</h2>
            </div>
            <div onClick={logout} className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;