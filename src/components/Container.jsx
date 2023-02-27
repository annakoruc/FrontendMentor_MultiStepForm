import { Formik } from "formik";
import React, { useContext } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { paths } from "../config/paths";
import { AppContext } from "../store/AppContext";
import { ContainerStyle } from "../styles";
import { LinkStyle } from "../styles/UI";

export const Container = (props) => {
  // const ctx = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  // const {
  //   userName,
  //   userEmail,
  //   userPhone,
  //   setUserName,
  //   setUserEmail,
  //   setUserPhone,
  // } = useContext(AppContext);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  // console.log(ctx);

  return (
    <ContainerStyle>
      <nav>
        <h1>{props.title}</h1>
        <h2>{props.text}</h2>
      </nav>
      <div className="forms">
        {/* <Formik
        initialValues={{ name: userName, email: userEmail, phone: userPhone }}
        onSubmit={(values, actions) => {
          setUserName(values.name);
          setUserEmail(values.email);
          setUserPhone(values.phone);

          console.log(userName, userEmail, userPhone);
        }}
        // className='forms'
      > */}
        {props.children}
        <div className="buttons">
          {location.pathname !== paths.home ? (
            <button className="back-button" onClick={() => navigate(-1)}>
              Go Back
            </button>
          ) : (
            <p />
          )}
          {location.pathname !== paths.fourth ? (
            <LinkStyle type="submit" to={props.path}>
              Next Step
            </LinkStyle>
          ) : (
            <button type="submit">Confirm</button>
          )}
        </div>
        {/* </Formik> */}
      </div>
    </ContainerStyle>
  );
};
