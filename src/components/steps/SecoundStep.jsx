import React, { useContext, useEffect, useState } from "react";

import { paths } from "../../config/paths";
import { SecoundStepStyle } from "../../styles/steps";
import { PlanCard } from "../PlanCard";
import { ToggleSwitch } from "../UI";

import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { AppContext } from "../../store/AppContext";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { PlanSchema } from "../../formik/schemes/PlanSchema";

const plans = [
  { img: arcade, title: "Arcade", costMonth: 9, costYear: 90 },
  { img: advanced, title: "Advanced", costMonth: 12, costYear: 120 },
  { img: pro, title: "Pro", costMonth: 15, costYear: 150 },
];

export const SecoundStep = (props) => {
  const navigate = useNavigate();

  const { isYearlyCtx, setIsYearlyCtx, planCtx, setPlan, costCtx, setCost } =
    useContext(AppContext);

  useEffect(() => {
    props.stepTitle(
      "Select your plan",
      "You have the option of monthly or yearly billing",
      paths.third
    );
  }, []);

  return (
    <Formik
      initialValues={{
        plan: planCtx,
      }}
      onSubmit={(values) => {
        console.log(values);
        setPlan(values.plan);

        const planObject = plans.find((obj) => obj.title === values.plan);

        setCost(isYearlyCtx ? planObject.costYear : planObject.costMonth);
        navigate(paths.third);
      }}
      validationSchema={PlanSchema}
    >
      {(props) => (
        <SecoundStepStyle>
          <div role="group" className="cards" aria-labelledby="my-radio-group">
            {plans.map((plan) => (
              <PlanCard
                key={plan.title}
                name="plan"
                img={plan.img}
                title={plan.title}
                cost={`$${
                  !isYearlyCtx ? plan.costMonth + "/mo" : plan.costYear + "/yr"
                }`}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={plan.title}
                className={props.values.checked ? "active" : ""}
              />
            ))}
          </div>
          <div className="toggle">
            <p className={!isYearlyCtx ? "active" : undefined}>Monthly</p>
            <ToggleSwitch
              name="isYearly"
              onChange={() => {
                setIsYearlyCtx(!isYearlyCtx);
              }}
              onBlur={props.handleBlur}
              checked={isYearlyCtx}
            />
            <p className={isYearlyCtx ? "active" : undefined}>Yearly</p>
          </div>
          <p className="error">{props.errors.plan}</p>
          <div className="buttons">
            <button
              className="back-button"
              onClick={() => navigate(paths.home)}
            >
              Go Back
            </button>
            <button type="submit">Next Step</button>
          </div>
        </SecoundStepStyle>
      )}
    </Formik>
  );
};
