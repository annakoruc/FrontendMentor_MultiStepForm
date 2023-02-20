import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  width: 100%;
  padding: 2em 5em;
  // gap: 4em;

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.coolGray};
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    // align-content: flex-end;

    a {
      align-self: flex-end;
    }
    
    
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

  }

  }
`;
