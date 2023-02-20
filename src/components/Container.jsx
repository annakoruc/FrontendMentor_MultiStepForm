import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { paths } from "../config/paths";
import { ContainerStyle } from "../styles";
import { LinkStyle } from "../styles/UI";

export const Container = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ContainerStyle>
      <nav>
        <h1>{props.title}</h1>
        <h2>{props.text}</h2>
      </nav>
      <form>{props.children}</form>
      <div className="buttons">
        {location.pathname !== paths.home ? (
          <button className="back-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        ) : (
          <p />
        )}
        {location.pathname !== paths.fourth ? (
          <LinkStyle to={props.path}>Next Step</LinkStyle>
        ) : (
          <button type="submit">Confirm</button>
        )}
      </div>
    </ContainerStyle>
  );
};
