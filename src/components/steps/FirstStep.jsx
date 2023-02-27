import { Form, Formik, useFormik } from "formik";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import { paths } from "../../config/paths";
import { AppContext } from "../../store/AppContext";

import { Input } from "../UI";

import { UserDataSchema } from "../../formik/schemes";

export const FirstStep = (props) => {
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

  const onSubmmitHandler = (values, actions) => {
    setUserName(values.name);
    setUserEmail(values.email);
    setUserPhone(values.phone);

    console.log(userName, userEmail, userPhone);
  };

  return (
    <Formik
      initialValues={{ name: userName, email: userEmail, phone: userPhone }}
      onSubmit={(values, actions) => {
        setUserName(values.name);
        setUserEmail(values.email);
        setUserPhone(values.phone);

        console.log(userName, userEmail, userPhone);
      }}
    >
      {(props) => (
        <Form>
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
          <button type="submit">Confirm</button>
        </Form>
      )}
    </Formik>
  );
};
