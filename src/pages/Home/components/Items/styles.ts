import styled from "styled-components";

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  display: flex;

  section:nth-child(2) {
    margin-left: 2.5rem;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

export const ShoppingItem = styled(Item)`
  svg {
    background-color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.5rem;
    border-radius: 999px;
  }
`;

export const TimerItem = styled(Item)`
  svg {
    background-color: ${(props) => props.theme["yellow"]};
    padding: 0.5rem;
    border-radius: 999px;
  }
`;

export const PackageItem = styled(Item)`
  svg {
    background-color: ${(props) => props.theme["base-text"]};
    padding: 0.5rem;
    border-radius: 999px;
  }
`;

export const CoffeeItem = styled(Item)`
  svg {
    background-color: ${(props) => props.theme["purple"]};
    padding: 0.5rem;
    border-radius: 999px;
  }
`;
