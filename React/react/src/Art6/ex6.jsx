import React, { useEffect } from 'react';

function SomaCondicional() {
    useEffect(() => {
        const numero1 = parseFloat(prompt("Digite o primeiro número:"));
        const numero2 = parseFloat(prompt("Digite o segundo número:"));
        const soma = numero1 + numero2;

        if (soma > 10) {
            alert("A soma é maior que 10.");
        } else {
            alert("A soma é menor ou igual a 10.");
        }
    }, []);

    return <h1>Soma Condicional</h1>;
}

export default SomaCondicional;
