import React from "react";
import { InputStyle } from "../../styles/UI";

export const Input = (props) => {
  return (
    <InputStyle>
      <label htmlFor={props.id}>{props.children}</label>
      <input id={props.id} placeholder={props.placeholder} />
    </InputStyle>
  );
};
