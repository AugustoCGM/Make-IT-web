import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  
  padding: 12px 24px;
  color: #000000;
  
  border: 2px solid transparent; 
  border-radius: 50px; 
  
  background-image: linear-gradient(#FEFEFE, #FEFEFE), 
                    linear-gradient(to right, #FD70D4, #6762EC);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
    background-image: linear-gradient(#FEFEFE, #FEFEFE), 
                    linear-gradient(to right, #6762EC,  #FD70D4);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  }
`;

export const ButtonText = styled.span`
background-image: linear-gradient(to right, #6762EC, #FD70D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'quicksand', sans-serif;
`;
