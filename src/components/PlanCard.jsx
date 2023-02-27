import React from "react";
import { PlanCardStyle } from "../styles/UI";

export const PlanCard = (props) => {
  return (
    <PlanCardStyle onClick={props.onClick}>
      <img src={props.img} />
      <div>
        <p className="title">{props.plan}</p>
        <p>{props.cost}</p>
      </div>
    </PlanCardStyle>
  );
};
