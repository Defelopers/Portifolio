import { useState } from 'react'
import './App.css'
import Todo from './Componentes/Todo'
import TodoForm from './Componentes/TodoForm'



function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Terminar trabalho" ,
      category: "Estudos" ,
      isCompleted: false,
    },
    {
      id:1,
      text: "Fazer portifolio",
      category: " Trabalho",
      isCompleted: false,
    },
    {
      id:1,
      text: "Ir para a cademia" ,
      category: "Pessoal" ,
      isCompleted: false,
    },
  ])

  return (
    <div className='app'>
       <h1>Lista de Tarefas</h1>
       <div className='todo-list'>
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo}/>
            ))}
       </div>
       <TodoForm/>
    </div>
  )
}

export default App
