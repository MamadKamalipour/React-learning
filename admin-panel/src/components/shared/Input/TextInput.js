import React from "react";
import { useField,ErrorMessage } from "formik";

const TextInput = ({label , ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className="input__Wrapper mb-4">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && `is-invalid`
        }       `}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name}/>

    </div>
  );
};

export default TextInput;
