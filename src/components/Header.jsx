import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Titulo = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.text};
`;

const BotaoTema = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.theme.primary};
  color: white;
  font-weight: bold;
  
  &:hover {
    opacity: 0.9;
  }
`;

function Header({ alternarTema, temaAtual }) {
  return (
    <Container>
      <Titulo>Lista de Tarefas</Titulo>
      <BotaoTema onClick={alternarTema}>
        {temaAtual === 'light' ? 'Escuro' : 'Claro'}
      </BotaoTema>
    </Container>
  );
}

export default Header;