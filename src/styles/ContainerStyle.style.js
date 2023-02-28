import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-between;
  width: 100%;
  padding: 2em 5em;
  gap: 3em;

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
`;
