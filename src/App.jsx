import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Layout } from "./components";
import {
  FirstStep,
  SecoundStep,
  ThirdStep,
  FourthStep,
} from "./components/steps";
import { paths } from "./config/paths";

import { Container } from "./styles";
import { GlobalStyles, theme } from "./styles/Global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Layout />
        <Routes>
          <Route exact path={paths.home} element={<FirstStep />} />
          <Route exact path={paths.first} element={<FirstStep />} />
          <Route exact path={paths.secound} element={<SecoundStep />} />
          <Route exact path={paths.third} element={<ThirdStep />} />
          <Route exact path={paths.fourth} element={<FourthStep />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
