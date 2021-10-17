import React from "react";

const Car = (props) => {
  return (
    <>
      <p>
        the model of the car is <strong>{props.model}</strong> And the
        color is <strong>{props.color}</strong>
      </p>
      <span>{props.children}</span>
    </>
  );
};
export default Car;
