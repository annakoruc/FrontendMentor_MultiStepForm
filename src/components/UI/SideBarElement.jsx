import React from "react";
import { StepInSidebar } from "../../styles/UI";

export const SideBarElement = (props) => {
  return (
    <StepInSidebar>
      <div>{props.number}</div>
      <nav>
        <p>STEP {props.number}</p>
        <h3>{props.title}</h3>
      </nav>
    </StepInSidebar>
  );
};
