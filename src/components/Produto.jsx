import React from "react";
import './Produto.css'
import $ from 'jquery'

export default function ({produtos}) {

    function esconder() {
        $('.cest').hide(500)
    }

    function mostrar() {
        $('.cest').show(500)
    }

    return <div className="Produto">

            <div className="Card" >
                
                <div className="description" onClick={mostrar}>Produto : {produtos.descricao}</div>
                <div className="cest" onClick={esconder}>ID : {produtos.id}</div>
                <div className="cest">Cest : {produtos.cest}</div>
                <div className="cest">NCM : {produtos.ncm}</div>
                <div className="cest">ICMS : {produtos.cst_icms}</div>

            </div>
    </div>
}

