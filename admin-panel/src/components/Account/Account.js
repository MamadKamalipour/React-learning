import React, { useContext } from "react";
import { userContext } from "../../context/UserContextProvider";
import Navbar from "../shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextInput from "../shared/Input/TextInput";
import { Toastify } from "../shared/Toastify/Toastify";

import { Formik, Form } from "formik";

import * as Yup from "yup";

const Account = () => {
  // context
  const user = useContext(userContext);
  const userPassword = user.user.password;
  const Validate = Yup.object({
    name: Yup.string().max(15, "Name most be less then 15 chars"),
    fName: Yup.string().max(15, "Family Name most be less then 15 chars"),
    email: Yup.string().email("Email Invalid"),
    currentPass: Yup.string().required(
      "Password Feild Is Requaired For Changes"
    ),
    newPassword: Yup.string().min(8, "Password Most be at least 8 char"),
    confirmNewpass: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords are Not Match"
    ),
  });

  const submitHandler = (values) => {
    if (values.currentPass === userPassword) {
      if (values.name !== "") {
        user.setUser((prev) => ({
          ...prev,
          name: values.name,
        }));
      }

      if (values.fName !== "") {
        user.setUser((prev) => ({
          ...prev,
          fname: values.fName,
        }));
      }

      if (values.email !== "") {
        user.setUser((prev) => ({
          ...prev,
          email: values.email,
        }));
      }
      if (values.newPassword === values.confirmNewpass) {
        user.setUser((prev) => ({
          ...prev,
          password: values.newPassword,
        }));
      }
    } else {
      Toastify("error", "Incurrect Password");
    }
  };
  return (
    <div className="account">
      <Navbar />
      <div className="account__wrapper">
        <div className="account__wrapper__inputs">
          <Formik
            validationSchema={Validate}
            initialValues={{
              name: "",
              fName: "",
              email: "",
              currentPass: "",
              newPassword: "",
              confirmNewpass: "",
            }}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            {(formik) => (
              <div>
                {/* {console.log(formik.values)} */}
                <Form>
                  <TextInput label="name" name="name" type="text" />
                  <TextInput label="Family Name" name="fName" type="text" />
                  <TextInput label="email" name="email" type="email" />
                  <TextInput
                    label="currentPass"
                    name="currentPass"
                    type="password"
                  />
                  <TextInput
                    label="newPassword"
                    name="newPassword"
                    type="password"
                  />
                  <TextInput
                    label="confirmNewpass"
                    name="confirmNewpass"
                    type="password"
                  />
                  <button type="submit" className="submitBtn">
                    Submit Changes
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Account;
