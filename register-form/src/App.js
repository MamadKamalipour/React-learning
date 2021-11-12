import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {Route , Switch} from 'react-router-dom'
function App() {
  document.title="Login/Register"
  return (
    <div className="App">
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={SignUp}/>
        <Route path="/" component={HomePage} />
        </Switch>
    
    </div>
  );
}

export default App;
