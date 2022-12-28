import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";
import {
  ItemsContainer,
  ShoppingItem,
  TimerItem,
  PackageItem,
  CoffeeItem,
} from "./styles";

export function Items() {
  const theme = useTheme();
  return (
    <ItemsContainer>
      <section>
        <ShoppingItem>
          <ShoppingCart size={32} color={theme["background"]} weight='fill' />
          <span>Simple and secure buy</span>
        </ShoppingItem>
        <TimerItem>
          <Timer size={32} color={theme["background"]} weight='fill' />
          <span>Fast and tracked delivery</span>
        </TimerItem>
      </section>

      <section>
        <PackageItem>
          <Package size={32} color={theme["background"]} weight='fill' />
          <span>Ideal package</span>
        </PackageItem>
        <CoffeeItem>
          <Coffee size={32} color={theme["background"]} weight='fill' />
          <span>Hot and delicious coffee for you</span>
        </CoffeeItem>
      </section>
    </ItemsContainer>
  );
}
