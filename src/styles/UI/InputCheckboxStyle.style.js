import styled from "styled-components";

export const InputCheckboxStyle = styled.label`
  width: 100%;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.5em;

  display: grid;
  grid-template-areas: "input text cost";
  grid-template-columns: 10% 75% 15%;
  justify-items: start;
  align-items: center;
  //   justify-content: stretch;
  padding: 1em;

  h3 {
    color: ${({ theme }) => theme.colors.primary.marineBlue};
  }

  p {
    color: ${({ theme }) => theme.colors.coolGray};
  }

  div {
    grid-area: text;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input {
    grid-area: input;

    height: 20px;
    width: 20px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  .cost {
    grid-area: cost;
    color: ${({ theme }) => theme.colors.primary.purpliskBlue};
  }

  :active {
    background: ${({ theme }) => theme.colors.backgroundColor};
    border: 1.5px solid ${({ theme }) => theme.colors.primary.marineBlue};
  }
`;
