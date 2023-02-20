import React from "react";
import { SideBarElement } from "./UI";
import { SidebarStyle } from "../styles";
import { paths } from "../config/paths";

export const Sidebar = () => {
  return (
    <>
      <SidebarStyle>
        <SideBarElement path={paths.home} number="1" title="YOUR INFO" />
        <SideBarElement path={paths.secound} number="2" title="SELECT PLAN" />
        <SideBarElement path={paths.third} number="3" title="ADD-ONS" />
        <SideBarElement path={paths.fourth} number="4" title="SUMMARY" />
      </SidebarStyle>
    </>
  );
};
