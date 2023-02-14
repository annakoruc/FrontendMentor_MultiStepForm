import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { ThirdStepStyle } from "../../styles/steps";
import { InputCheckbox } from "../UI";

const addOnsList = [
  {
    title: "Online service",
    text: "Access to multiplayer games",
    costMonth: 1,
    costYear: 10,
  },
  {
    title: "Larger storage",
    text: "Extra 1TB cloud save",
    costMonth: 2,
    costYear: 20,
  },
  {
    title: "Customizable profile",
    text: "Custom theme on your profile",
    costMonth: 2,
    costYear: 20,
  },
];

export const ThirdStep = (props) => {
  // połączyć z isMonthly z ToggleSwitch !
  const isMonthy = true;
  //
  useEffect(() => {
    props.stepTitle(
      "Pick add-ons",
      "Add-ons help enhance your gaming experience.",
      paths.fourth
    );
  }, []);

  return (
    <ThirdStepStyle>
      {addOnsList.map((element) => (
        <InputCheckbox
          text={element.text}
          cost={
            isMonthy ? `+$${element.costMonth}/mo` : `+$${element.costYear}/yr`
          }
        >
          {element.title}
        </InputCheckbox>
      ))}
    </ThirdStepStyle>
  );
};
