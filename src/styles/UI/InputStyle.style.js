import styled from "styled-components";

export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1em;
  width: 100%;

  input {
    background: ${({ theme }) => theme.colors.white};
    font-weight: medium;
    text-decoration: none;
    padding: 1em 2em;
    border-radius: 0.5em;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    outline: none;

    &:focus {
      border: 1.5px solid ${({ theme }) => theme.colors.primary.purpliskBlue};
    }
  }

  label {
    color: ${({ theme }) => theme.colors.primary.marineBlue};
    font-weight: medium;
  }
`;
