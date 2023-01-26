import { Address } from "./components/Address";
import { CheckoutContainer, Title } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <Title>Complete your order</Title>
        <Address />
        {/* <Payment/> */}
      </section>
      <section>{/* <Confirmation/> */}</section>
    </CheckoutContainer>
  );
}
