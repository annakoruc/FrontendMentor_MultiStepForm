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

import { GlobalStyles, theme } from "./styles/Global";

const App = () => {
  const [stepTitle, setStepTitile] = useState({});

  const stepTitleHandler = (title, text, path) => {
    setStepTitile({ title: title, text: text, path: path });
  };

  return (
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
              element={<FirstStep stepTitle={stepTitleHandler} />}
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
  );
};

export default App;
