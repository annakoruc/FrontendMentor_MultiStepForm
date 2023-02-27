import React from "react";
import { InputStyle } from "../../styles/UI";

export const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </InputStyle>
  );
});
