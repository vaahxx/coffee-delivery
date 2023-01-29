import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Background = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Main = styled.main`
  display: flex;
  margin: 5.875rem 10rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-family: "Baloo 2", cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
`;

export const Subtitle = styled.h3`
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;
