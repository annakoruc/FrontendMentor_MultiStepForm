import React, { useState } from "react";
import { AppContext } from "./AppContext";

const values = {
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

export const ContextProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [isMonthlyCtx, setIsMonthlyCtx] = useState(true);
  const [plan, setPlan] = useState("");
  const [cost, setCost] = useState("");

  const [addOns, setAddOns] = useState([]);

  return (
    <AppContext.Provider
      value={{
        userName,
        userEmail,
        userPhone,
        isMonthlyCtx,
        plan,
        cost,
        addOns,
        setUserName,
        setUserEmail,
        setUserPhone,
        setIsMonthlyCtx,
        setPlan,
        setCost,
        setAddOns,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
