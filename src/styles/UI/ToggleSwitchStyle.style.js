import styled from "styled-components";

export const ToggleSwitchStyle = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  border-radius: 26px;

  background: ${({ theme }) => theme.colors.primary.marineBlue};

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span:before {
      transform: translateX(26px);
    }
  }

  span {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 50%;

    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background: ${({ theme }) => theme.colors.white};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
