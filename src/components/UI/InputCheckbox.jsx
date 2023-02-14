import React from "react";
import { InputCheckboxStyle } from "../../styles/UI";

export const InputCheckbox = (props) => {
  return (
    <InputCheckboxStyle>
      <input type="checkbox" />
      <div>
        <h3>{props.children}</h3>
        <p>{props.text}</p>
      </div>
      <p className="cost">{props.cost}</p>
    </InputCheckboxStyle>
  );
};
