"use client"
import { useState } from 'react';
import { 
  CardContainer, 
  CardHeader, 
  LeftSection, 
  TaskTitle, 
  StatusCircle, 
  GroupFlag,
  ExpandButton,
  ExpandedContentBox
} from './styles';

interface TaskCardProps {
  task: any; 
}

export default function TaskCard({ task }: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isGroupTask = !!task.grupo;

  return (
    <CardContainer>
      
      {isGroupTask && (
        <GroupFlag>
          {task.grupo.nomeGrupoOuMembro}
        </GroupFlag>
      )}
      
      <CardHeader>
        <LeftSection>
          {/* Círculo de check (ainda não faz nada, implementaremos a lógica depois) */}
          <StatusCircle />
          <TaskTitle>{task.titulo}</TaskTitle>
        </LeftSection>

        {/* 🔴 O clique agora fica APENAS aqui */}
        <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            // Seta para cima
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7L7 1L13 7" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            // Seta para baixo
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </ExpandButton>
      </CardHeader>

      {/* 🔴 Renderização da caixa cinza apenas se expandido */}
      {isExpanded && (
        <ExpandedContentBox>
          {task.descricao?.resumo && (
            <p style={{ margin: 0 }}>{task.descricao.resumo}</p>
          )}
        </ExpandedContentBox>
      )}
      
    </CardContainer>
  );
}