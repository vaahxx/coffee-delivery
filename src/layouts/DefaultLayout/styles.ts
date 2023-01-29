import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme["background"]};
  display: flex;
  margin-top: 2rem;
  margin-bottom: 9.8125rem;
  flex-direction: column;
`;
