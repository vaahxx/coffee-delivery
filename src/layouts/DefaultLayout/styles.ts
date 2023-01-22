import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme["background"]};
  display: flex;
  padding: 2rem 10rem 9.8125rem;
  flex-direction: column;
`;
