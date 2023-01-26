import styled from "styled-components";

export const AddressCardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: top;
  gap: 0.5rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const Subtitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

export const AddressFormContainer = styled.form``;

export const Input = styled.input`
  background: ${(props) => props.theme["base-input"]};
  height: 2.5rem;
  border: 0;
  border: 2px solid ${(props) => props.theme["base-button"]};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["base-label"]};
  &:focus {
    box-shadow: none;
    /* border-color: ${(props) => props.theme["green-500"]}; */
  }
  &::placeholder {
    /* color: ${(props) => props.theme["gray-500"]}; */
  }
`;
