import React, {useState} from "react";

function UsandouseState(){

const [mensagem, setMensagem] = useState("Olá!");

    const atualizarMensagem = () =>{
    setMensagem("Olá, visitante!");
}

return(
    <div>
        <h1>{mensagem}</h1>
        <button onClick={atualizarMensagem}>Clique aqui</button>
    </div>
)

} export default UsandouseState