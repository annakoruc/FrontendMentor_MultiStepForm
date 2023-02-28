import { Form } from "formik";
import styled from "styled-components";

export const ThirdStepStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
  }
`;
