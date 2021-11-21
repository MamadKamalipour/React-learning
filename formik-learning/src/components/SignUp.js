import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
const SignUp = () => {
  const Validate = Yup.object({
    name: Yup.string()
      .max(15, "Name Must be 15 charachters")
      .required("this field is requaired"),

    fName: Yup.string()
      .max(15, "Name Must be 15 charachters")
      .required("this field is requaired"),
    email: Yup.string()
      .email("invalid Email")
      .required("this field is requaired"),
      currentPass: Yup.string().required("this field is requaired"),
    newPassword: Yup.string()
      .min(8, "pass must have at least 8 chars")
      .required("this field is requaired"),
      confirmNewpass: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "passwords does not match")
      .required("this field is requaired"),
  });

  return (
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
      onSubmit={values =>{
          console.log(values)
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold display-4">Sign Up</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField lable="name" name="name" type="text" />
            <TextField lable="fName" name="fName" type="text" />
            <TextField lable="email" name="email" type="email" />
            <TextField lable="currentPass" name="currentPass" type="password" />
            <TextField lable="newPassword" name="newPassword" type="password" />
            <TextField
              lable="confirmNewpass"
              name="confirmNewpass"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
