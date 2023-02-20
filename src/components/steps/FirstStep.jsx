import React, { useEffect } from "react";

import { paths } from "../../config/paths";

import { Input } from "../UI";

export const FirstStep = (props) => {
  useEffect(() => {
    props.stepTitle(
      "Personal Info",
      "Please provide your name, email address, and phone number.",
      paths.secound
    );
  }, []);

  return (
    <main>
      <Input id="name" placeholder="e.g. Stephen King">
        Name
      </Input>
      <Input id="email" placeholder="e.g. stephenking@lorem.com">
        Email Address
      </Input>
      <Input id="phone" placeholder="e.g. +1 234 567 890">
        Phone Number
      </Input>
    </main>
  );
};
