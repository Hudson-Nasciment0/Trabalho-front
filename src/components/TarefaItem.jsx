import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.border};
  border-radius: 6px;
`;

const TextoTarefa = styled.span`
  color: ${props => props.theme.text};
  text-decoration: ${props => props.concluida ? 'line-through' : 'none'};
  opacity: ${props => props.concluida ? 0.5 : 1};
  cursor: pointer;
  flex: 1;
`;

const BotaoDeletar = styled.button`
  padding: 6px 12px;
  background-color: ${props => props.theme.danger};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

function TarefaItem({ tarefa, alternarConclusao, removerTarefa }) {
  return (
    <Item>
      <TextoTarefa 
        concluida={tarefa.concluida} 
        onClick={() => alternarConclusao(tarefa.id)}
      >
        {tarefa.texto}
      </TextoTarefa>
      <BotaoDeletar onClick={() => removerTarefa(tarefa.id)}>
        Excluir
      </BotaoDeletar>
    </Item>
  );
}

export default TarefaItem;