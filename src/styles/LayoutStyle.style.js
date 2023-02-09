import styled from "styled-components";

export const LayoutStyle = styled.div`
  background: ${({ theme }) => theme.colors.white};

  width: 1000px;
  max-width: 90%;
  height: 600px;
  padding: 1em;
  margin: 3em auto;
  border-radius: 1em;

  display: flex;
`;
