import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 0 1.5rem;
  padding-bottom: 1.25rem;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Pill = styled.span`
  padding: 4px 8px;
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 100px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 0.7rem;
  }
`;

export const Price = styled.span`
  font-family: "Baloo 2", cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]}; ;
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme["purple-dark"]};
  cursor: pointer;
  border: 0;
  border-radius: 6px;
  padding: 0.3rem;
`;
