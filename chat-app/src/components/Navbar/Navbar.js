import React,{useContext} from 'react';
import styles from "./Navbar.module.css"
import { AuthContext } from '../../contexts/AuthContextProvider';


const Navbar = ({logout}) => {
    const user = useContext(AuthContext)
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.name}>Chat App By Mammad Kamalipour</h2>
            </div>
                
            <h3>Welcome {user.displayName}</h3>

            <div onClick={logout} className={styles.logout}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;