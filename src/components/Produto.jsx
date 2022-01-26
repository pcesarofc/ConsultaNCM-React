import React from "react";
import './Produto.css'
import './Tributos.css'
import $ from 'jquery'



export default function ({produtos}) {

    function showall (){
        return $('div#cest').show(1)
    }

        
    return <div className="Produto">
            <div className="Card" onLoad={$('div#cest').hide(1)}>
                <div className="description" >Produto : {produtos.descricao}</div>
                <input type="button" value="Clique" onClick={showall} />
                <div id="cest" className="cest">Cest : {produtos.cest}</div>
                <div id="cest" className="cest">NCM : {produtos.ncm}</div>
                <div id="cest" className="cest">ICMS : {produtos.cst_icms}</div>
            </div>  
    </div>
}

