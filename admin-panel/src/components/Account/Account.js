import React, { useState, useContext } from "react";
import { userContext } from "../../context/UserContextProvider";
import Navbar from "../shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toastify } from "../shared/Toastify/Toastify";
const Account = () => {
  // context
  const user = useContext(userContext);
  //   states
  const [newName, setNewName] = useState("");
  const [newFname, setNewFname] = useState("");
  const [newEmail, setEmail] = useState("");
  const oldPassword = user.user.password;
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [isPassValid, setIsPassValid] = useState(false);

  const submitHandler = () => {
    // name setter
    if (newName !== "") {
      if (!isPassValid) {
        Toastify("error", "Incurrect Password");
      } else {
        user.setUser({ ...user.user, name: newName });
        Toastify("success", "Your Name Changed")

      }
    }
    // fname setter
    if (newFname !== "") {
      if (!isPassValid) {
        Toastify("error", "Incurrect Password");
      } else {
        user.setUser({ ...user.user, fname: newFname });
        Toastify("success", "Your Family Name Changed")
      }
    }
    //email setter
    if (newEmail !== "") {
      if (!isPassValid) {
        Toastify("error", "Incurrect Password");
      } else {
        user.setUser({ ...user.user, email: newEmail });
        Toastify("success", "Your Email Changed")

      }
    }
    // password setter
    if (newPass !== "" && confirmNewPass !== "") {
      if (!isPassValid) {
        Toastify("error", "Incurrect Password");
      }else if(newPass !== confirmNewPass){
        Toastify("error", "Passwords does not match");
      }
       else {
        user.setUser({ ...user.user, password: newPass });
        Toastify("success", "Your Password Changed")

      }
    } 
  };
  return (
    <div className="account">
      <Navbar />
      <div className="account__wrapper">
        <div className="account__wrapper__inputs">
        <span>Change Name</span>
          <input
            type="text"
            value={newName}
            placeholder="New Name"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        <span>Change Family Name</span>
          <input
            type="text"
            placeholder="New Family Name"
            value={newFname}
            onChange={(e) => {
              setNewFname(e.target.value);
            }}
          />
        <span>Change Email</span>
          <input
            type="email"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Confirm Your Changes</h5>
          <input
            type="password"
            placeholder="Current Password"
            onChange={(e) => {
              if (e.target.value === oldPassword) {
                setIsPassValid(true);
              }
            }}
          />
          <h5>Change Password</h5>
          <input
            type="password"
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
            placeholder="New Password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmNewPass}
            onChange={(e) => {
              setConfirmNewPass(e.target.value);
            }}
          />
        </div>
        <button className="submitBtn" onClick={submitHandler}>
          Submit Changes
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Account;
