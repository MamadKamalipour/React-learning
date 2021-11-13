import React from 'react';
import spinner from "../../imgs/372102230_BITCOIN_400px.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loader"/>
        </div>
    );
};

export default Loader;