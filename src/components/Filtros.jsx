import React from 'react';
import styled from 'styled-components';

const ContainerFiltros = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const BotaoFiltro = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.ativo ? props.theme.primary : props.theme.cardBg};
  color: ${props => props.ativo ? 'white' : props.theme.text};
  border: 1px solid ${props => props.theme.border};
  font-weight: ${props => props.ativo ? 'bold' : 'normal'};

  &:hover {
    background-color: ${props => props.ativo ? props.theme.primary : props.theme.border};
  }
`;

function Filtros({ filtroAtual, setFiltro }) {
  return (
    <ContainerFiltros>
      <BotaoFiltro ativo={filtroAtual === 'todas'} onClick={() => setFiltro('todas')}>
        Todas
      </BotaoFiltro>
      <BotaoFiltro ativo={filtroAtual === 'ativas'} onClick={() => setFiltro('ativas')}>
        Ativas
      </BotaoFiltro>
      <BotaoFiltro ativo={filtroAtual === 'concluidas'} onClick={() => setFiltro('concluidas')}>
        Concluídas
      </BotaoFiltro>
    </ContainerFiltros>
  );
}

export default Filtros;