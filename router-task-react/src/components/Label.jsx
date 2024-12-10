import React from "react";

const Label = ({ whatFor, labelText }) => {
  return <label for={whatFor}>{labelText}:</label>;
};

export default Label;
