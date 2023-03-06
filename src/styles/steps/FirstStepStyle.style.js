import { Form } from "formik";
import styled from "styled-components";

export const FirstStepStyle = styled(Form)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    margin-bottom: 1.5em;
  }
`;
