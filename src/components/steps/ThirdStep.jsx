import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { InputCheckbox } from "../UI";

export const ThirdStep = (props) => {
  useEffect(() => {
    props.stepTitle(
      "Pick add-ons",
      "Add-ons help enhance your gaming experience.",
      paths.fourth
    );
  }, []);
  return (
    <>
      <InputCheckbox>Online service</InputCheckbox>
      <InputCheckbox>Larger storage</InputCheckbox>
      <InputCheckbox>Customizable profile</InputCheckbox>
    </>
  );
};
