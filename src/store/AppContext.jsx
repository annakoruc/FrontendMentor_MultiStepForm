import React from "react";

export const InitialState = {
  name: "",
  email: "",
  phone: 0,
  plan: "",
  isMonthly: true,
  addOns: {},
};

export const AppContext = React.createContext(InitialState);
