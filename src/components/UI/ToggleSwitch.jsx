import React from "react";
import { ToggleSwitchStyle } from "../../styles/UI";

export const ToggleSwitch = (props) => {
  return (
    <ToggleSwitchStyle>
      <input
        type="checkbox"
        onChange={props.onChange}
        name={props.name}
        checked={props.checked}
      />
      <span />
    </ToggleSwitchStyle>
  );
};
