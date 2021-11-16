import React from 'react';


import styles from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.name}>Chat App By Mammad Kamalipour</h2>
            </div>
            <div className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;