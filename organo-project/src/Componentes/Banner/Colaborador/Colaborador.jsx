import "./Colaborador.css"
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const Colaborador = ({nome,imagem, cargo, corDeFundo, aoDeletar}) => {

  return (
    <div className="colaborador">
        <IoCloseOutline size={27} className="deletar" onClick={aoDeletar}/>
        <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Colaborador