import React from "react";
import { Sidebar, PlanCard, ResultCard } from "./components";
import { Button, Input, InputCheckbox, ToggleSwitch } from "./components/UI";

const App = () => {
  return (
    <>
      <h1>Hello world! I am using React</h1>
      <Button />
      <Input />
      <Sidebar />
      <PlanCard />
      <InputCheckbox />
      <ToggleSwitch />
      <ResultCard />
    </>
  );
};

export default App;
