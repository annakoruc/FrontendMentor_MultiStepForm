import React, { useContext, useEffect, useState } from "react";

import { paths } from "../../config/paths";
import { SecoundStepStyle } from "../../styles/steps";
import { PlanCard } from "../PlanCard";
import { ToggleSwitch } from "../UI";

import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { AppContext } from "../../store/AppContext";

const plans = [
  { img: arcade, title: "Arcade", costMonth: 9, costYear: 90 },
  { img: advanced, title: "Advanced", costMonth: 12, costYear: 120 },
  { img: pro, title: "Pro", costMonth: 15, costYear: 150 },
];

export const SecoundStep = (props) => {
  const ctx = useContext(AppContext);
  const { isMonthlyCtx, setIsMonthlyCtx, setPlan, setCost } =
    useContext(AppContext);

  useEffect(() => {
    props.stepTitle(
      "Select your plan",
      "You have the option of monthly or yearly billing",
      paths.third
    );
  }, []);

  return (
    <SecoundStepStyle>
      <div className="cards">
        {plans.map((plan) => (
          <PlanCard
            key={plan.title}
            img={plan.img}
            plan={plan.title}
            cost={`$${
              isMonthlyCtx ? plan.costMonth + "/mo" : plan.costYear + "/yr"
            }`}
            onClick={() => {
              setPlan(plan.title);
              setCost(isMonthlyCtx ? plan.costMonth : plan.costYear);
              console.log(ctx);
            }}
          />
        ))}
      </div>
      <div className="toggle">
        <p className={isMonthlyCtx ? "active" : undefined}>Monthly</p>
        <ToggleSwitch onChange={() => setIsMonthlyCtx(!isMonthlyCtx)} />
        <p className={!isMonthlyCtx ? "active" : undefined}>Yearly</p>
      </div>
    </SecoundStepStyle>
  );
};
