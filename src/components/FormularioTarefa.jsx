import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  font-size: 16px;
`;

const BotaoAdicionar = styled.button`
  padding: 0 20px;
  background-color: ${props => props.theme.success};
  color: white;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    adicionarTarefa(texto);
    setTexto('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Nova tarefa..." 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <BotaoAdicionar type="submit">Adicionar</BotaoAdicionar>
    </Form>
  );
}

export default FormularioTarefa;