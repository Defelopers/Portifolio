import { useState } from 'react'
import './App.css'
import Todo from './Componentes/Todo'
import TodoForm from './Componentes/TodoForm'
import Search from './Componentes/Search'
import Filter from './Componentes/Filter'



function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Terminar trabalho de faculdade" ,
      category: "Estudos" ,
      isCompleted: false,
    },
    {
      id:2,
      text: "Fazer portifolio",
      category: " Trabalho",
      isCompleted: false,
    },
    {
      id:3,
      text: "Ir para a cademia" ,
      category: "Pessoal" ,
      isCompleted: false,
    },
  ])

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
      const newTodos = [
        ...todos, 
        {
        id:Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted:false,
      },
    
    ];

    setTodos(newTodos)
  };

  // Para remover o todo vai se basear no id
  const removeTodo = (id) => {
      const newTodos = [...todos]
      const filteredTodos = newTodos.filter((todo) => 
        todo.id !== id ? todo : null
    );
    setTodos(filteredTodos)
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
  );
  setTodos(newTodos);


  };

  return (
    <div className='app'>
       <h1>Lista de Tarefas</h1>
       <Search search={search} setSearch={setSearch}/>
       <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
       <div className='todo-list'>
            {todos
            .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()) 
            )
            .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) :b.text.localeCompare(a.text) )
            .map((todo) => (
              // Elemento que não se repete
              <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
            ))}
       </div>
       <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
