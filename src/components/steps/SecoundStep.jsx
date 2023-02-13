import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { PlanCard } from "../PlanCard";
import { ToggleSwitch } from "../UI";

export const SecoundStep = (props) => {
  useEffect(() => {
    props.stepTitle(
      "Select your plan",
      "You have the option of monthly or yearly billing",
      paths.third
    );
  }, []);

  return (
    <>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <ToggleSwitch />
    </>
  );
};
