import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ContainerStyle } from "../styles";

export const Container = (props) => {
  return (
    <ContainerStyle>
      <nav>
        <h1>{props.title}</h1>
        <h2>{props.text}</h2>
      </nav>
      {props.children}
    </ContainerStyle>
  );
};
