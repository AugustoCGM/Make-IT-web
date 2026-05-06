"use client"

import { InputContainer, StyledInput } from "./styles";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    temErro?: boolean; // Adicionamos a propriedade aqui
}

export default function Input({ type, placeholder, value, onChange, temErro }: InputProps) {
  return (
      <InputContainer>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          $temErro={temErro} // Repassamos para o estilo com o $
        />
      </InputContainer>
  );
}