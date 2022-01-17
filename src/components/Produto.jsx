import React from "react";
import './Produto.css'


export default function ({produtos}) {
    return <div className="Produto">
        {produtos.descricao}
    </div>
}