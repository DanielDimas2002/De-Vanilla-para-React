import React from "react";

function Alert(){
    const funcaoAtivaAlerta = () =>{
        alert("Você clicou no botão em React");
    }

    return(
        <button onClick={funcaoAtivaAlerta}>
            Click para exibir alerta
        </button>
    )
}
export default Alert;