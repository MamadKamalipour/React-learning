import React, { useState, useEffect } from "react";
import { validate } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import Inputs from "./Inputs";
import styles from "./SignUp.module.css";
import {Link} from 'react-router-dom'
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    isRemmber:false,
  });
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setError(validate(data));
  }, [data, touched]);
  const changeHandler = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    
  };
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "done!");
    } else {
      notify("", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2>Login</h2>
        {/* email */}
        <div className={styles.inputWrapper}>
          <Inputs
            lable="Email"
            onFocus={focusHandler}
            name="email"
            type="text"
            value={data.email}
            onChange={changeHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        {/* pass */}
        <div className={styles.inputWrapper}>
          <Inputs
            lable="Password"
            onFocus={focusHandler}
            name="password"
            type="password"
            value={data.password}
            onChange={changeHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        {/* checkbox */}
        <div className={styles.inputWrapper}>
          <Inputs
            lable="Remmeber me"
            onFocus={focusHandler}
            name="isRemmber"
            type="checkbox"
            value={data.isRemmber}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.buttonsWrapper}>
          <Link to="/register">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
