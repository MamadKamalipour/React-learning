import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomePage.module.css"
const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome You Need To Login To Use Our Features!</h1>
            <button><Link to='/login'>Login Page</Link></button>
        </div>
    );
};

export default HomePage;