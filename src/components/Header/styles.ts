import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 85px;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const LocationButton = styled.button`
  background-color: ${(props) => props.theme["purple-light"]};
  border: 0;
  border-radius: 6px;
  align-items: center;
  display: flex;
  padding: 0.5rem;
  color: ${(props) => props.theme["purple-dark"]};
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme["yellow-light"]};
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
`;
