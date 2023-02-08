import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { PlanCard } from "../PlanCard";
import { ToggleSwitch } from "../UI";

export const SecoundStep = () => {
  return (
    <>
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing</h2>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <ToggleSwitch />
      <Link to={paths.third}>Next Step</Link>
    </>
  );
};
