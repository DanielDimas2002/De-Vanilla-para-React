import React, { useEffect } from 'react';

function Saudacao() {
    useEffect(() => {
        const nome = prompt("Qual é o seu nome?");
        alert("Olá, " + nome + "!");
    }, []);

    return <h1>Bem-vindo ao React!</h1>;
}

export default Saudacao;
