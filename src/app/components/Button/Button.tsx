"use client"

import { StyledButton, ButtonText } from "./styles"; 

interface BotaoProps {
    onClick: () => void;
    textoDaProp: string;
    disabled?: boolean;
}

export default function Button({ onClick, textoDaProp, disabled }: BotaoProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>

      <ButtonText>
        {textoDaProp}
      </ButtonText>
    </StyledButton>
  );
}