"use client"
import TaskCard from "../components/TaskCard/TaskCard";

export default function Sandbox() {
  // Mock: Criamos uma tarefa falsa com o objeto "grupo" 
  // para forçar a borda roxa a aparecer no teste.
  const tarefaFalsa = {
    id: "1",
    titulo: "Compras para a noite do bolo",
    concluida: false,
    descricao: {
      resumo: "Comprar farinha de trigo para a receita do bolo de chocolate.",
    },
    grupo: {
      nomeGrupoOuMembro: "Grupo A",
      tipo: "Livre",
      statusMembros: {}
    }
  };

  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: '#F5F7FA', // Um cinza bem claro
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#7C7C7C', fontFamily: "'Quicksand', sans-serif", marginBottom: '40px' }}>
        Laboratório de Componentes
      </h1>
      
      {/* Container limitando a largura do card para simular uma coluna de Kanban ou Lista */}
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <TaskCard task={tarefaFalsa} />
      </div>
    </div>
  );
}