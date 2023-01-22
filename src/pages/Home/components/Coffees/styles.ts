import styled from "styled-components";

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-family: "Baloo 2", cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  margin-bottom: 3.375rem;
`;

export const CoffeesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
