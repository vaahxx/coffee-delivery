import styled, { css } from "styled-components";

interface CounterContainerProps {
  size?: "medium" | "small";
}

export const CounterContainer = styled.div<CounterContainerProps>`
  flex: 1;
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  span {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme["purple"]};
  cursor: pointer;
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
