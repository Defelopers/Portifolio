import React, { useState } from 'react'

const TodoForm = () => {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return;
    setValue('')
    setCategory('')

}

  return (

    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/>
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