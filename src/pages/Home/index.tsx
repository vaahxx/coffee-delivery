import coffeeCup from "../../assets/coffee-cup.svg";
import { Items } from "./components/Items";
import { HomeContainer, Subtitle, Title } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <Title>Find your perfect coffee anytime of the day</Title>
        <Subtitle>
          With Coffee Delivery, you will receive your order anytime and anywhere
        </Subtitle>
        <Items />
      </div>
      <img src={coffeeCup} />
    </HomeContainer>
  );
}
