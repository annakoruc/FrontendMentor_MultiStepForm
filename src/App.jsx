import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Layout, Container } from "./components";
import {
  FirstStep,
  SecoundStep,
  ThirdStep,
  FourthStep,
} from "./components/steps";
import { paths } from "./config/paths";
import { ContextProvider } from "./store/ContextProvider";

import { GlobalStyles, theme } from "./styles/Global";

const App = () => {
  const [stepTitle, setStepTitile] = useState({});
  // const [value, setValue] = useState({
  //   name: "",
  //   email: "",
  //   phone: 0,
  //   plan: "",
  //   isMonthly: true,
  //   addOns: {},
  // });

  const stepTitleHandler = (title, text, path) => {
    setStepTitile({ title: title, text: text, path: path });
  };

  // const setValueHandler = (name, email, phone) => {
  //   setValue({ ...value, name: name, email: email, phone: phone });
  // };

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Layout>
          <Container
            title={stepTitle.title}
            text={stepTitle.text}
            path={stepTitle.path}
          >
            <Routes>
              <Route
                exact
                path={paths.home}
                element={
                  <FirstStep
                    stepTitle={stepTitleHandler}
                    // value={setValueHandler}
                  />
                }
              />
              <Route
                exact
                path={paths.first}
                element={<FirstStep stepTitle={stepTitleHandler} />}
              />
              <Route
                exact
                path={paths.secound}
                element={<SecoundStep stepTitle={stepTitleHandler} />}
              />
              <Route
                exact
                path={paths.third}
                element={<ThirdStep stepTitle={stepTitleHandler} />}
              />
              <Route
                exact
                path={paths.fourth}
                element={<FourthStep stepTitle={stepTitleHandler} />}
              />
            </Routes>
          </Container>
        </Layout>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
