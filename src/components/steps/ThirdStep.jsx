import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { InputCheckbox } from "../UI";

export const ThirdStep = () => {
  return (
    <>
      <h1>Pick add-ons</h1>
      <h2>Add-ons help enhance your gaming experience.</h2>
      <InputCheckbox>Online service</InputCheckbox>
      <InputCheckbox>Larger storage</InputCheckbox>
      <InputCheckbox>Customizable profile</InputCheckbox>
      <Link to={paths.fourth}>Next Step</Link>
    </>
  );
};
