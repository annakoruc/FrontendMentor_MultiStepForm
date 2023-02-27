import { Field, FieldArray, Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const { isMonthlyCtx, setAddOns, addOns } = useContext(AppContext);
  const ctx = useContext(AppContext);

  useEffect(() => {
    props.stepTitle(
      "Pick add-ons",
      "Add-ons help enhance your gaming experience.",
      paths.fourth
    );
  }, []);

  const checkboxHandler = (event) => {
    const addOn = event.target;

    if (addOn.checked) {
      setAddOns([...addOns, addOn.value]);
    }
    // if (!event.target.checked) {
    //   setAddOns((prev) => [...prev.filter((item) => item.name)]);
    // }
  };

  return (
    <Formik
      initialValues={{ addOns: [] }}
      onSubmit={(values) => {
        console.log(values);
        setAddOns(values.addOns);
        console.log(ctx);
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
          <button type="submit">Button</button>
        </ThirdStepStyle>
      )}
    </Formik>
  );
};
