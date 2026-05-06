import styled from 'styled-components';

interface BlobProps {
  $color: string;       // Recebe a cor (ex: '#FF69B4')
  $size: string;        // Recebe o tamanho (ex: '300px')
  $top?: string;        // Posição vertical (opcional)
  $bottom?: string;     // Posição vertical (opcional)
  $left?: string;       // Posição horizontal (opcional)
  $right?: string;      // Posição horizontal (opcional)
  $blurAmount?: string; // Nível de desfoque (opcional, com valor padrão)
}

// 2. O Componente Reutilizável
export const BlurBlob = styled.div<BlobProps>`
  position: absolute;
  border-radius: 50%;
  z-index: -1; /* Mantém as bolhas atrás do conteúdo principal */
  
  /* Propriedades Dinâmicas passadas por você na hora de usar */
  background-color: ${props => props.$color};
  width: ${props => props.$size};
  height: ${props => props.$size};
  filter: blur(${props => props.$blurAmount || '100px'}); /* 120px é um ótimo padrão para esse visual */
  
  /* Sistema de Posicionamento (usa o valor passado ou 'auto') */
  top: ${props => props.$top || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
`;