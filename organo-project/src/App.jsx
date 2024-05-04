import { useState } from 'react'
import './App.css'
import Banner from './Componentes/Banner/Banner'
import Formulario from './Componentes/Banner/Formulario/Formulario'
import Time from './Componentes/Banner/Time/Time'

function App() {

  const times = [
    {
      nome:'Differentiated Problem Solving',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    },
    {
      nome:'Computational Thinking with Python',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    },
    {
      nome:'Edge Computing',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    },
    {
      nome:'Front-End',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    },
    {
      nome:'Web Development',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    },
    {
      nome:'Software & Total Experience Design',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    },
    {
      nome:'Storytelling',
      corPrimaria:'#ed145b',
      corSecundaria:'#F2F2F2'
    }
  
]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
  }

  return (
   <div className='App'>
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores}
      />)}
   </div>
  )
}

export default App
