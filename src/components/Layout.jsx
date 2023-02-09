import React from "react";
import { LayoutStyle } from "../styles";
import { Sidebar } from "./Sidebar";

export const Layout = (props) => {
  return (
    <LayoutStyle>
      <Sidebar />
      {props.children}
    </LayoutStyle>
  );
};
