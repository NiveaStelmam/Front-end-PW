import pwFetch from '../axios/config';
import { useState } from "react";
import React from 'react';
import './CadastrarFruta.css'; // arquivo CSS aqui
import { useNavigate } from "react-router-dom";

const CadastrarFruta = () => {
 
    const navigate = useNavigate()
    const [nome, setNome] = useState() 
    const [descricao, setDescricao] = useState()
    const [categoria, setCategoria] = useState()
    const [preco, setPreco] = useState()
    

    const createFruta =  async (e) => {
        e.preventDefault();
        const fruta = {nome, descricao, categoria, preco }
        console.log(fruta);
        await pwFetch.post("/fruta", 
        {nome, descricao, categoria, preco },
        )
    }


    return (
    <div className="new-fruta">
      <h2>Cadastrar Fruta</h2>
      <form onSubmit={(e) => createFruta(e)}>
        <div className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input 
            type="nome" 
            name="nome" 
            id="nome" 
            placeholder="Nome da fruta" 
            onChange={(e) => setNome(e.target.value)}
            className="input nome" 
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="descrição">Descrição:</label>
          <input 
            type="descricao" 
            name="descricao" 
            id="descricao" 
            placeholder="Digite uma descrição" 
            onChange={(e) => setDescricao(e.target.value)}
            className="input descrição"
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="categoria">Categoria:</label>
          <input 
            type="categoria" 
            name="categoria" 
            id="categoria" 
            placeholder="Digite a categoria" 
            onChange={(e) => setCategoria(e.target.value)}
            className="input categoria" 
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="preço">Preço:</label>
          <input 
            type="preço" 
            name="preço" 
            id="preço" 
            placeholder="Digite o preço" 
            onChange={(e) => setPreco(e.target.value)}
            className="input preço" 
            required
          /> 
        </div>
       
        <input 
          type="submit" 
          value="Cadastrar Fruta" 
          className="button" 
        />
      </form>
    </div>
  );
}

export default CadastrarFruta;
