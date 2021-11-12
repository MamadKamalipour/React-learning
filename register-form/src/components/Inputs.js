import React from "react";
import styles from "./Inputs.module.css"
const Inputs = (props) => {
  return (
    <div className={styles.inputHolder}>
      <label>{props.lable}</label>
      <input
        onFocus={props.onFocus}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        
      />
    </div>
  );
};

export default Inputs;
