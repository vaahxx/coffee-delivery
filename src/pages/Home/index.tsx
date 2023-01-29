import coffeeCup from "../../assets/coffee-cup.svg";
import { Items } from "./components/Items";
import { Coffees } from "./components/Coffees";
import { HomeContainer, Main, Title, Subtitle, Background } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Background>
        <Main>
          <div>
            <Title>Find your perfect coffee anytime of the day</Title>
            <Subtitle>
              With Coffee Delivery, you will receive your order anytime and
              anywhere
            </Subtitle>
            <Items />
          </div>
          <img src={coffeeCup} />
        </Main>
      </Background>
      <Coffees />
    </HomeContainer>
  );
}
