import React from "react";

export const InitialState = {
  name: "",
  email: "",
  phone: "",
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  isMonthly: true,
  plan: "",
  cost: "",
  setIsMonthy: () => {},
  setPlan: () => {},
  setCost: () => {},
  addOns: {},
  setAddOns: () => {},
};

export const AppContext = React.createContext(InitialState);
