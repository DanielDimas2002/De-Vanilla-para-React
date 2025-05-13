import React, { useEffect } from 'react';

function Validacao() {
    useEffect(() => {
        let numero;
        do {
            numero = parseFloat(prompt("Digite um número válido:"));
        } while (isNaN(numero));

        alert("Você digitou o número: " + numero);
    }, []);

    return <h1>Validação de Entrada</h1>;
}

export default Validacao;
