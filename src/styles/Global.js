import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
    background: ${({ theme }) => theme.colors.backgroundColor};
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    hight: 100%
   
}

h1 {
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary.marineBlue}
}

button, a {
  background: ${({ theme }) => theme.colors.primary.marineBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  padding: 1em 2em;
  border-radius: 0.5em;
  border: none;
  width: 150px;
  height: 50px;
  text-align: center;
  align-self: flex-end;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.purpliskBlue};
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  
  .back-button {
    background: none;
    color: ${({ theme }) => theme.colors.coolGray};
    padding: 0;
    width: 100px;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.marineBlue}
    }
}
`;

export const theme = {
  colors: {
    primary: {
      marineBlue: "hsl(213, 96%, 18%)",
      purpliskBlue: "hsl(243, 100%, 62%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      lightBlue: "hsl(206, 94%, 87%)",
      strawberryRed: "hsl(354, 84%, 57%)",
    },
    coolGray: "hsl(231, 11%, 63%)",
    lightGray: "hsl(229, 24%, 87%)",
    backgroundColor: "hsl(215, 100%, 97%)",
    alabaster: "hsl(231, 100%, 99%)",
    white: "hsl(0, 0%, 100%)",
  },
};
