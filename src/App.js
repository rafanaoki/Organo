import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState(
  [
  {
    id: uuidv4(),
    nome: 'Programação',
    cor: '#57C278',
  },
  {
    id: uuidv4(),
    nome: 'Front-End',
    cor: '#82CFFA',
  },
  {
    id: uuidv4(),
    nome: 'Data Sciense',
    cor: '#A6D157',
  },
  {
    id: uuidv4(),
    nome: 'Devops',
    cor: '#E06B69',
  },
  {
    id: uuidv4(),
    nome: 'UX e Design',
    cor: '#D86EBF',
  },
  {
    id: uuidv4(),
    nome: 'Mobile',
    cor: '#FEBA05',
  },
  {
    id: uuidv4(),
    nome: 'Inovação e Gestão',
    cor: '#FF8A29',
  }
  ]);

  const [colaboradores, setColaboradores] = useState([{
    id: uuidv4(),
    nome: 'Rafael',
    favorito: false,
    cargo: 'Front-End',
    img: '',
    cor: '#000',
    time: times[5].nome
  }]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  } 
  
  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, {...novoTime, id: uuidv4()} ])
  }
  
  function resolverFavoritar(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map((time, indice) => {
        return (
          <Time 
            aoFavoritar={resolverFavoritar}
            mudarCor={mudarCorDoTime}
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />
 
      )})}
      <Rodape/>
    </div>
  );
}

export default App;
