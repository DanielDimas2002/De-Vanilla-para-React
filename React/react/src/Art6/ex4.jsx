import React, { useEffect } from 'react';

function Debug() {
    useEffect(() => {
        const valor1 = prompt("Digite algo:");
        const valor2 = prompt("Digite algo novamente:");
        console.log("Tipo do valor 1:", typeof valor1);
        console.log("Tipo do valor 2:", typeof valor2);
        console.log('"2" + "2" resulta em:', "2" + "2");
        console.log('2 + 2 resulta em:', 2 + 2);
    }, []);

    return <h1>Debug de Tipos</h1>;
}

export default Debug;
