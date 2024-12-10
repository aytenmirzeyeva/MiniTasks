import React from "react";

const Input = ({ inputId, placeholder, type, value, onchange }) => {
  return (
    <input
      id={inputId}
      className="input"
      type={type}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
};

export default Input;
