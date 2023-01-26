import { useTheme } from "styled-components";
import { ShoppingCart } from "phosphor-react";
import {
  Card,
  Pill,
  Buy,
  CartButton,
  Description,
  Title,
  Price,
  CategoriesContainer,
} from "./styles";
import { Counter } from "../../../../components/Counter";
import { useState } from "react";

export interface Coffee {
  id: string;
  name: string;
  categories: string[];
  description: string;
  price: number;
  photo: string;
}

interface CoffeeCardProps {
  data: Coffee;
}

export function CoffeeCard({
  data: { name, categories, description, price, photo },
}: CoffeeCardProps) {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  return (
    <Card>
      <img src={`/coffees/${photo}`} alt='' />
      <Title>{name}</Title>
      <CategoriesContainer>
        {categories.map((category: string) => (
          <Pill key={category}>{category}</Pill>
        ))}
      </CategoriesContainer>
      <Description>{description}</Description>
      <Buy>
        <Price>{price}$</Price>
        <div>
          <Counter
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          ></Counter>
          <CartButton>
            <ShoppingCart size={22} color={theme["base-card"]} weight='fill' />
          </CartButton>
        </div>
      </Buy>
    </Card>
  );
}
