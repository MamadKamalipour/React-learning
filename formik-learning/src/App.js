import React from 'react';
import "./App.css"
import image from "./assets/wallet2.png"
import SignUp from './components/SignUp';
const App = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <SignUp />
                </div>
                <div className="col-md-7">
                    <img className="img-fluid w-100" src={image} alt="somthin..." />
                </div>
            </div>
        </div>
    );
};

export default App;