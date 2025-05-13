import React, { useEffect } from 'react';

function Soma() {
    useEffect(() => {
        const numero1 = parseFloat(prompt("Digite o primeiro número:"));
        const numero2 = parseFloat(prompt("Digite o segundo número:"));
        const soma = numero1 + numero2;
        alert("A soma é: " + soma);
    }, []);

    return <h1>Calculadora de Soma</h1>;
}

export default Soma;
