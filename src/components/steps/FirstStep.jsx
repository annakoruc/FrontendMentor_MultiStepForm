import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";

import { paths } from "../../config/paths";
import { AppContext } from "../../store/AppContext";

import { Input } from "../UI";

import { FirstStepStyle } from "../../styles/steps";

export const FirstStep = (props) => {
  const navigate = useNavigate();

  const {
    userName,
    userEmail,
    userPhone,
    setUserName,
    setUserEmail,
    setUserPhone,
  } = useContext(AppContext);

  useEffect(() => {
    props.stepTitle(
      "Personal Info",
      "Please provide your name, email address, and phone number.",
      paths.secound
    );
  }, []);

  return (
    <Formik
      initialValues={{ name: userName, email: userEmail, phone: userPhone }}
      onSubmit={(values, actions) => {
        setUserName(values.name);
        setUserEmail(values.email);
        setUserPhone(values.phone);

        console.log(userName, userEmail, userPhone);
        navigate(paths.secound);
      }}
    >
      {(props) => (
        <FirstStepStyle>
          <div>
            <Input
              id="name"
              placeholder="e.g. Stephen King"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            >
              Name
            </Input>
            <Input
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            >
              Email Address
            </Input>
            <Input
              id="phone"
              placeholder="e.g. +1 234 567 890"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.phone}
            >
              Phone Number
            </Input>
          </div>
          <button type="submit">Confirm</button>
        </FirstStepStyle>
      )}
    </Formik>
  );
};
