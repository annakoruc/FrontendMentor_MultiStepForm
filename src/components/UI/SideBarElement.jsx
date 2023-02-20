import React from "react";
import { useLocation } from "react-router-dom";
import { StepInSidebar } from "../../styles/UI";

export const SideBarElement = (props) => {
  const location = useLocation();

  return (
    <StepInSidebar>
      <div className={location.pathname === props.path ? "active" : ""}>
        {props.number}
      </div>
      <nav>
        <p>STEP {props.number}</p>
        <h3>{props.title}</h3>
      </nav>
    </StepInSidebar>
  );
};
