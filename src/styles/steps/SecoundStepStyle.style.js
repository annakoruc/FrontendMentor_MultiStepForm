import { Form } from "formik";
import styled from "styled-components";

export const SecoundStepStyle = styled(Form)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cards {
    display: flex;
    justify-content: space-between;
  }

  .toggle {
    background: ${({ theme }) => theme.colors.backgroundColor};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    height: 50px;
    border-radius: 0.5em;

    p {
      color: ${({ theme }) => theme.colors.coolGray};
      font-size: 14px;
      font-weight: bold;
    }
    .active {
      color: ${({ theme }) => theme.colors.primary.marineBlue};
      font-weight: bold;
    }
  }

  .error {
    color: ${({ theme }) => theme.colors.primary.strawberryRed};
  }
`;
