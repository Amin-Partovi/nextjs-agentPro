import React from "react";

const Button = props => {
  return (
    <button
      {...props}
      className={`normalBtn ${props.outline ? "outlineBtn" : ""}`}>
      <strong>{props.children}</strong>
    </button>
  );
};

export default Button;
