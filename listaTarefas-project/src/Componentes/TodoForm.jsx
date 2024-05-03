import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    // Gerenciando o estado
    const [value, setValue] = useState('') // Prennchido pelo input
    const [category, setCategory] = useState('') // Preenchido pelo input

// Essa função dá o submit do formulário 
const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return; // Validação : Se não tiver value ou não tiver a categoria retorne
    addTodo(value, category) // Se os valores forem preenchidos, vai executar uma função para adicionar todo e limpar os campos
    setValue('')
    setCategory('')

}

  return (

    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/> {/*Evento onChange para mudança de valores*/}
            <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoall</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Enviar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm