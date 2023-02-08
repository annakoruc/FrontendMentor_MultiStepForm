import React from "react";

export const InputCheckbox = (props) => {
  return (
    <label>
      <input type="checkbox" />
      {props.children}
    </label>
  );
};
