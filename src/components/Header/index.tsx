import { useTheme } from "styled-components";
import { ShoppingCart, MapPin } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, LocationButton, CartButton } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logo} alt='' />
      </NavLink>
      <div>
        <LocationButton disabled>
          <MapPin size={22} color={theme["purple-dark"]} weight='fill' />
          Montréal, Quebec
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} color={theme["yellow-dark"]} weight='fill' />
        </CartButton>
      </div>
    </HeaderContainer>
  );
}
