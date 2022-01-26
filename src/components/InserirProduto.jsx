import React from "react";
import Button from "./Button";
import './InserirProduto.css';
import axios from 'axios';

export default function ({AdicionarProduto}, {produtos}) {
    const urlncm = 'https://xpenses-121a5-default-rtdb.firebaseio.com/consultas/consultancm/produto.json?orderBy="ncm"&equalTo='
    const urlean = 'https://xpenses-121a5-default-rtdb.firebaseio.com/consultas/consultaean/produto.json?orderBy="ean"&equalTo='
    const [inputProduto, setInputProduto] = React.useState('')

    function handleChangeInput (e) {
        setInputProduto(e.target.value)
    }

    function handleClickButton () {

    // Condicional que verifica o tamanho da entrada para consultar via ncm ou ean

        if(inputProduto.length == 8){
            const url1 = urlncm + '"' + inputProduto + '"'
            axios.get(url1).then(response => {
                var i
                let novosProdutos = []
                for(i in response.data){
                    novosProdutos = [...novosProdutos, 
                        {   descricao: response.data[i].descricao,
                            cest: response.data[i].cest,
                            ncm: response.data[i].ncm,
                            cst_icms: response.data[i].cst_icms
                        }
                    ]
                }
                AdicionarProduto(novosProdutos)
            })}
            else{
                const url1 = urlean + '"' + inputProduto + '"'
                axios.get(url1).then(response => {
                    var i
                    let novosProdutos = []
                    for(i in response.data){
                        novosProdutos = [...novosProdutos, 
                            {   descricao: response.data[i].descricao,
                                cest: response.data[i].cest,
                                ncm: response.data[i].ncm,
                                cst_icms: response.data[i].cst_icms
                            }
                        ]
                }
                AdicionarProduto(novosProdutos)
            })}   
    }
    return <>
        <input type="text" className="Input" onChange={handleChangeInput} value={inputProduto}/>
        <Button onClick={handleClickButton}/>
    </>
}