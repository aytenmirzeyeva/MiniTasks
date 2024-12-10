import React from "react";

const Button = ({ btnText, onclick, disabled }) => {
  return (
    <button className="btn" onClick={onclick} disabled={disabled}>
      {btnText}
    </button>
  );
};

export default Button;
