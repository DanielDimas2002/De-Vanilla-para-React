import React from "react";

function Console(){

    const funcaoAtivaConsole = () => {
        console.log("Botão clicado no React")
    }

    return(
        <button onClick={funcaoAtivaConsole}>
            Click para logar no console
        </button>
    )
}

export default Console;