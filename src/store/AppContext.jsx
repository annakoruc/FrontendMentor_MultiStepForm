import React from "react";

export const InitialState = {
  name: "",
  email: "",
  phone: "",
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  isYearly: false,
  planCtx: "",
  costCtx: "",
  setIsYearly: () => {},
  setPlan: () => {},
  setCost: () => {},
  addOns: {},
  setAddOns: () => {},
};

export const AppContext = React.createContext(InitialState);
