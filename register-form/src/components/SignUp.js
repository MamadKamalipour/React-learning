import React, { useState, useEffect } from "react";
import { validate } from "./validation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast";
const SignUp = () => {
    
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });
  const [errors, setError] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setError(validate(data));
  }, [data, touched]);
  const changeHandler = (e) => {
    if (e.target.name === "isChecked") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
        notify("success", "done!")
    } else {
        notify("","error")
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isChecked: true,
      });
    }
  };

  return (
    <div>
    <ToastContainer />
      <form onSubmit={submitHandler}>
        <h2>SignUp</h2>
        <div>
          <label>Name</label>
          <input
            onFocus={focusHandler}
            name="name"
            type="text"
            value={data.name}
            onChange={changeHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            onFocus={focusHandler}
            name="email"
            type="text"
            value={data.email}
            onChange={changeHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
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
        <div>
          <label>Confirm Password</label>
          <input
            onFocus={focusHandler}
            name="confirmPassword"
            type="password"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div>
          <label>I Agree to This app terms and policy</label>
          <input
            onFocus={focusHandler}
            name="isChecked"
            type="checkbox"
            value={data.isChecked}
            onChange={changeHandler}
          />
          {errors.isChecked && touched.isChecked && (
            <span>{errors.isChecked}</span>
          )}
        </div>
        <div>
          <a href="/">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
