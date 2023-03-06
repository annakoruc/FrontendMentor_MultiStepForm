import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { PlanCardStyle } from "../styles/UI";

export const PlanCard = (props) => {
  return (
    <PlanCardStyle>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.id}
        {...props}
      />
      <label htmlFor={props.name}>
        <img src={props.img} />
        <div>
          <p className="title">{props.title}</p>
          <p>{props.cost}</p>
        </div>
      </label>
    </PlanCardStyle>
  );
};
