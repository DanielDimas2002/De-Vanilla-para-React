import React, { useEffect } from 'react';

function Saudacao() {
    useEffect(() => {
        alert("Olá, seja bem-vindo!");
    }, []);

    return <h1>Bem-vindo ao React!</h1>;
}

export default Saudacao;
