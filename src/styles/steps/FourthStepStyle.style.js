import styled from "styled-components";

export const FourthStepStyle = styled.div`
  main {
    background: ${({ theme }) => theme.colors.backgroundColor};
    padding: 1.5em;
    border-radius: 0.5em;
  }

  .plan {
    display: flex;
    justify-content: space-between;
    gap: 0.5em;
    padding-bottom: 1em;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }

    a {
      align-self: flex-start;
      background: none;
      color: ${({ theme }) => theme.colors.coolGray};
      font-weight: normal;
      font-size: 16px;
      text-decoration: underline;
      padding: 0;
      width: 60px;
      height: 30px;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.purpliskBlue};
      }
    }

    p {
      font-size: 18px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.marineBlue};
    }
  }

  .add-ons {
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
    padding-top: 1em;

    div {
      display: flex;
      justify-content: space-between;
    }

    p {
      color: ${({ theme }) => theme.colors.coolGray};
    }
  }

  .result {
    display: flex;
    justify-content: space-between;
    padding: 1.5em;
    color: ${({ theme }) => theme.colors.coolGray};

    p {
      font-size: 20px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.purpliskBlue};
    }
  }
`;
