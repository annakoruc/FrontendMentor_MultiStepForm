import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [isYearlyCtx, setIsYearlyCtx] = useState(false);
  const [planCtx, setPlan] = useState("");
  const [costCtx, setCost] = useState("");

  const [addOns, setAddOns] = useState([]);

  return (
    <AppContext.Provider
      value={{
        userName,
        userEmail,
        userPhone,
        isYearlyCtx,
        planCtx,
        costCtx,
        addOns,
        setUserName,
        setUserEmail,
        setUserPhone,
        setIsYearlyCtx,
        setPlan,
        setCost,
        setAddOns,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
