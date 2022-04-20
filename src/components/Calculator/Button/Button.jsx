import React from "react";

const Button = (props) => {
  return (
    <>
      <button className={`btn btn-${props.color}`} onClick={props.buttonClick} value={props.value}>
        {props.value}
      </button>
    </>
  );
};

export default Button;
