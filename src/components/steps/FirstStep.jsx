import React from "react";

import { paths } from "../../config/paths";
import { LinkStyle } from "../../styles/UI/LinkStyle.style";
import { Input } from "../UI";

export const FirstStep = () => {
  return (
    <>
      <h1>Personal info</h1>
      <h2>Please provide your name, email address, and phone number.</h2>
      <form>
        <Input id="name" placeholder="e.g. Stephen King">
          Name
        </Input>
        <Input id="email" placeholder="e.g. stephenking@lorem.com">
          Adress Email
        </Input>
        <Input id="phone" placeholder="e.g. +1 234 567 890">
          Phone
        </Input>
      </form>
      <LinkStyle to={paths.secound}>Next Step</LinkStyle>
    </>
  );
};
