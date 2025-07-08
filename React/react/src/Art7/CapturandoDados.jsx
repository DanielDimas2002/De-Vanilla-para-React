import React, {useRef, useState} from "react";

function CapturandoDados(){

    {/*const inputRef = useRef(null);
    const tituloRef = useRef(null);

    function exibirSaudacao(){
        const nome = inputRef.current.value;
        tituloRef.current.innerText = "Olá, " + nome + "!"
    }


    return(
        <div>
            <h1 ref = {tituloRef}>Olá!</h1>
            <input type="text" placeholder="Digite seu nome" ref={inputRef}/>
            <button onClick={exibirSaudacao}>Enviar</button>
        </div>
    );*/}


    const [nome, setNome] = useState("");

    function handleChange(evento){
        setNome(evento.target.value);
    }

    return(
        <div>
            <h1>Olá, {nome}</h1>
            <input type="text" placeholder="Digite seu nome" onChange={handleChange}/>
        </div>
    );

}export default CapturandoDados;