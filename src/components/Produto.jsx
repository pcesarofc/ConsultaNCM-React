import React from "react";
import './Produto.css'
import './Tributos.css'



export default function ({produtos}) {

    return <div className="Produto">
            <div className="Card">
                <div className="description">Produto : {produtos.descricao}</div>
                <div className="cest">Cest : {produtos.cest}</div>
                <div className="cest">NCM : {produtos.ncm}</div>
                <div className="cest">ICMS : {produtos.cst_icms}</div>
            </div>  
    </div>
}

