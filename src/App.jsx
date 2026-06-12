import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyle } from './styles/GlobalStyle';


import Header from './components/Header';
import FormularioTarefa from './components/FormularioTarefa';
import Filtros from './components/Filtros';
import TarefaItem from './components/TarefaItem';

function App() {
  
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar para a prova de React', concluida: false },
    { id: 2, texto: 'Entregar o trabalho no prazo', concluida: true }
  ]);


  const [filtro, setFiltro] = useState('todas');

  
  const [tema, setTema] = useState('light');

  
  const alternarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(), 
      texto: texto,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  
  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'ativas') return !tarefa.concluida;
    if (filtro === 'concluidas') return tarefa.concluida;
    return true; // 'todas'
  });

  return (
    <ThemeProvider theme={tema === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      
      {/* Container principal*/}
      <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
        
        {/* função de alternar e o tema atual para o Header */}
        <Header alternarTema={alternarTema} temaAtual={tema} />
        
        {/* função de adicionar para o formulário */}
        <FormularioTarefa adicionarTarefa={adicionarTarefa} />
        
        {/* filtro atual e a função de mudar filtro */}
        <Filtros filtroAtual={filtro} setFiltro={setFiltro} />
        
        {/* Lista de Tarefas  */}
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'colunm', gap: '10px' }}>
          {tarefasFiltradas.map(tarefa => (
            <TarefaItem 
              key={tarefa.id} 
              tarefa={tarefa} 
              alternarConclusao={alternarConclusao} 
              removerTarefa={removerTarefa} 
            />
          ))}
          {tarefasFiltradas.length === 0 && (
            <p style={{ textAlign: 'center', opacity: 0.6, marginTop: '20px' }}>Nenhuma tarefa por aqui!</p>
          )}
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;