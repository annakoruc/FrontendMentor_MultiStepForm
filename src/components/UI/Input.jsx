import React from "react";
import { InputStyle } from "../../styles/UI";

export const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle htmlFor={props.id}>
      <div>
        <p>{props.children}</p>
        {props.errors && props.touched ? (
          <p className="error-text">{props.errors}</p>
        ) : null}
      </div>
      <input
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.errors && props.touched ? "error-input" : ""}
      />
    </InputStyle>
  );
});
