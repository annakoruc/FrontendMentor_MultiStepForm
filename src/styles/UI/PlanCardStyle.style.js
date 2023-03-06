import styled from "styled-components";

export const PlanCardStyle = styled.div`
  height: 150px;
  width: 30%;

  label {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;

    background: none;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.5em;

    :hover {
      background: ${({ theme }) => theme.colors.backgroundColor};
      border: 1.5px solid ${({ theme }) => theme.colors.primary.marineBlue};
    }

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

    .free-months {
      color: ${({ theme }) => theme.colors.primary.marineBlue};
    }
  }

  // // HIDE RADIO
  input {
    position: absolute;
    opacity: 0;
    height: 150px;
    width: 15%;
  }

  input[type="radio"]:checked + label {
    background: ${({ theme }) => theme.colors.backgroundColor};
    border: 1.5px solid ${({ theme }) => theme.colors.primary.marineBlue};
  }
`;
