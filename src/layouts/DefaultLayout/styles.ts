import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme["background"]};
  display: flex;
  padding: 0 10rem;
`;
