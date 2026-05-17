import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaçamento entre o cabeçalho e a caixa cinza */
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border: 1px solid #EBEBEB;
  
  /* Essencial para ancorar a Flag no topo direito */
  position: relative; 
  overflow: hidden; 
  transition: all 0.2s ease-in-out;
`;

export const GroupFlag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 18px;
  background-color: #8E94F2;
  color: #FFFFFF;
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 600;
  border-radius: 0 0 0 12px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px; /* Pequeno empurrão para a seta não encostar na flag */
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StatusCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #C4C4C4; /* Cinza um pouco mais marcado como na imagem */
  flex-shrink: 0;
  cursor: pointer; /* O check será clicável no futuro */
`;

export const TaskTitle = styled.h4`
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
`;

/* 🔴 NOVO: Botão de seta invisível e alinhado */
export const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #333;
  margin-top: 10px; /* Alinha a seta logo abaixo da flag */
`;

/* 🔴 NOVO: A caixa cinza para o conteúdo */
export const ExpandedContentBox = styled.div`
  background-color: #F3F4F6;
  border-radius: 8px;
  padding: 15px 20px;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  color: #333333;
`;