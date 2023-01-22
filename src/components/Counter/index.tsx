import { Minus, Plus } from "phosphor-react";
import { IconWrapper, CounterContainer } from "./styles";

interface CounterProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Counter({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: CounterProps) {
  return (
    <CounterContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight='fill' />
      </IconWrapper>
      <span>{quantity}</span>
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight='fill' />
      </IconWrapper>
    </CounterContainer>
  );
}
