import React from "react";
import Button from "./Button";
import './InserirProduto.css'
import axios from 'axios'


export default function ({AdicionarProduto}, {produtos}) {
    const url = 'https://xpenses-121a5-default-rtdb.firebaseio.com/consultas/consultancm/produto.json?orderBy="ncm"&equalTo='
    
    const [inputProduto, setInputProduto] = React.useState('')

    function handleChangeInput (e) {
        setInputProduto(e.target.value)
    }

    function handleClickButton () {
        const url1 = url + '"' + inputProduto + '"'

        console.log(url1)
        axios.get(url1).then(response => {
            var i
            let novosProdutos = []
            for(i in response.data){
                novosProdutos = [...novosProdutos, {descricao: response.data[i].descricao}]
            }
            AdicionarProduto(novosProdutos)
        })
        
    }


    return <>
        <input type="text" className="Input" onChange={handleChangeInput} value={inputProduto}/>
        <Button onClick={handleClickButton}/>
    </>
}