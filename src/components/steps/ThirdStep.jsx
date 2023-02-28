import { FieldArray, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../config/paths";
import { AppContext } from "../../store/AppContext";
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
  const navigate = useNavigate();
  const { isMonthlyCtx, setAddOns } = useContext(AppContext);

  useEffect(() => {
    props.stepTitle(
      "Pick add-ons",
      "Add-ons help enhance your gaming experience.",
      paths.fourth
    );
  }, []);

  return (
    <Formik
      initialValues={{ addOns: [] }}
      onSubmit={(values) => {
        console.log(values);
        setAddOns(values.addOns);
        navigate(paths.fourth);
      }}
    >
      {({ values }) => (
        <ThirdStepStyle>
          <FieldArray
            name="addOns"
            render={({ push, remove }) => (
              <ul>
                {addOnsList.map((element) => (
                  <li key={element.title}>
                    <InputCheckbox
                      key={element.title}
                      text={element.text}
                      cost={
                        isMonthlyCtx
                          ? `+$${element.costMonth}/mo`
                          : `+$${element.costYear}/yr`
                      }
                      name="addOns"
                      value={element.title}
                      onChange={(e) => {
                        if (e.target.checked) {
                          push({
                            title: element.title,
                            cost: isMonthlyCtx
                              ? element.costMonth
                              : element.costYear,
                          });
                          console.log(values.addOns);
                        } else {
                          const index = values.addOns
                            .map(function (e) {
                              return e.cost;
                            })
                            .indexOf(element.cost);
                          remove(index);
                          console.log(values.addOns);
                        }
                      }}
                    >
                      {element.title}
                    </InputCheckbox>
                  </li>
                ))}
              </ul>
            )}
          />
          <div className="buttons">
            <button
              className="back-button"
              onClick={() => navigate(paths.secound)}
            >
              Go Back
            </button>

            <button type="submit">Next Step</button>
          </div>
        </ThirdStepStyle>
      )}
    </Formik>
  );
};
