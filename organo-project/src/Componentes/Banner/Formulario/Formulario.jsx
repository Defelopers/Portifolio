import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import "./Formulario.css"

import React, { useState } from 'react'

const Formulario = (props) => {

    

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

  return (
    <section className="formulario">
        <form onSubmit={aoSalvar}> 
        <h2>Preencha os dados para cadastrar o colaborador</h2>
        <CampoTexto aoAlterado={valor => setNome(valor)}  valor={nome} obrigatorio={true} label="Nome" placeholder="Digite o nome"/>
        <CampoTexto aoAlterado={valor => setCargo(valor)}  valor={cargo} obrigatorio={true} label="Cargo" placeholder="Digite o cargo"/>
        <CampoTexto aoAlterado={valor => setImagem(valor)}  valor={imagem}  label="Imagem" placeholder="Digite o endereço da imagem"/>
        <ListaSuspensa aoAlterado={valor => setTime(valor)}  valor={time} obrigatorio={true} label="Time" itens={props.times}/>
        <Botao texto="Cadastrar"/>
        </form>
    </section>
  )
}

export default Formulario