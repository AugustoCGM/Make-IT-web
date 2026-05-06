import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  padding: 0 25px;
  border-radius: 50px;
`;

interface StyledInputProps {
  $temErro?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 15px;
  border-radius: 50px;
  border: ${props => props.$temErro ? '2px solid red' : '2px solid transparent'};
  box-shadow: inset 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #F8F6F7;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: #979797;
  font-weight: 500;
  box-sizing: border-box;

  &:focus {
    /* Força a remoção de qualquer outline global */
    outline: none !important; 
    
    /* Garante que APENAS a nossa sombra interna apareça, matando sombras externas pretas */
    box-shadow: inset 0 4px 4px 0px rgba(0, 0, 0, 0.25) !important; 
    
    /* Aplica a nossa cor! */
      background-image: linear-gradient(#FEFEFE, #FEFEFE), 
                    linear-gradient(to right, #FD70D4, #6762EC);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  }
`;