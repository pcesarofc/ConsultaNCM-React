import React from "react";
import './Button.css'


export default function ({onClick}) {
    return <button 
    className="Button"
    onClick={onClick}>Pesquisar</button>
}