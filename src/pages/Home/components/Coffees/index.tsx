import coffees from "../../../../data/coffees.json";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeesContainer, Title, CoffeesListContainer } from "./styles";

export function Coffees() {
  return (
    <CoffeesContainer>
      <Title>Our Coffees</Title>
      <CoffeesListContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} data={coffee} />
        ))}
      </CoffeesListContainer>
    </CoffeesContainer>
  );
}
