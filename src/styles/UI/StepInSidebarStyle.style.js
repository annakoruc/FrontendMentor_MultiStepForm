import styled from "styled-components";

export const StepInSidebar = styled.div`
  color: white;

  display: flex;
  gap: 20px;
  padding: 1em;
  align-items: center;

  div {
    border: 1px solid ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    text-align: center;
    font-weight: bold;

    // &:active {
    //   border: none;
    //   background: ${({ theme }) => theme.colors.primary.lightBlue};
    //   color: ${({ theme }) => theme.colors.primary.marineBlue};
    // }
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  h3 {
    font-weight: medium;
    font-size: 14px;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .active {
    border: none;
    background: ${({ theme }) => theme.colors.primary.lightBlue};
    color: ${({ theme }) => theme.colors.primary.marineBlue};
  }
`;
