import styled from 'styled-components';

export const CircleButton = styled.button`
  width: 55px; 
  height: 55px;
  border-radius: 50%; 
  
  background-color: #FEFEFE;
  border: 1px solid #EBEBEB;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
 
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;


  &:hover {
    transform: translateY(-2px);
    box-shadow: inset 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;