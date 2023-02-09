import React from "react";
import { SideBarElement } from "./UI";
import { SidebarStyle } from "../styles/UI";

export const Sidebar = () => {
  return (
    <>
      <SidebarStyle>
        <SideBarElement number="1" title="YOUR INFO" />
        <SideBarElement number="2" title="SELECT PLAN" />
        <SideBarElement number="3" title="ADD-ONS" />
        <SideBarElement number="4" title="SUMMARY" />
      </SidebarStyle>
    </>
  );
};
