import styled from "styled-components";

export const PlanCardStyle = styled.button`
  height: 150px;
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;

  background: none;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.5em;

  .title {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.marineBlue};
  }

  p {
    color: ${({ theme }) => theme.colors.coolGray};
  }

  img {
    height: 40px;
    width: 40px;
  }

  :focus {
    background: ${({ theme }) => theme.colors.backgroundColor};
    border: 1.5px solid ${({ theme }) => theme.colors.primary.marineBlue};
  }
`;
