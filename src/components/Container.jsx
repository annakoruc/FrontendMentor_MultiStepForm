import React from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { paths } from "../config/paths";
import { ContainerStyle } from "../styles";
import { LinkStyle } from "../styles/UI";

export const Container = (props) => {
  const location = useLocation();

  return (
    <ContainerStyle>
      <nav>
        <h1>{props.title}</h1>
        <h2>{props.text}</h2>
      </nav>
      <form>{props.children}</form>
      {location.pathname !== paths.fourth ? (
        <LinkStyle to={props.path}>Next Step</LinkStyle>
      ) : (
        <button type="submit">Confirm</button>
      )}
    </ContainerStyle>
  );
};
