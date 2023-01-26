import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useFormContext, FormProvider, useForm } from "react-hook-form";
import {
  AddressCardContainer,
  Title,
  Subtitle,
  TitleContainer,
  Input,
  AddressFormContainer,
} from "./styles";

const addressFormValidationSchema = zod.object({
  postalCode: zod.string().min(6).max(6),
  street: zod.string().min(1),
  number: zod.number().min(1).max(4),
  apartment: zod.string().min(1),
  city: zod.string().min(1),
  province: zod.string().min(2).max(2),
});

type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Address() {
  const theme = useTheme();

  return (
    <AddressCardContainer>
      <TitleContainer>
        <MapPinLine size={22} color={theme["yellow-dark"]} />
        <div>
          <Title>Shipping Address</Title>
          <Subtitle>Where do you want your order to be delivered?</Subtitle>
        </div>
      </TitleContainer>

      <AddressFormContainer>
        <Input
          id='postal-code'
          placeholder='Postal Code'
          // {...register("postal-code")}
        />
      </AddressFormContainer>
    </AddressCardContainer>
  );
}
