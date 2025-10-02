import React from "react";

function Idade() {

    const idade = 20;
    let mensagem = "";

    switch (true) {
        case idade < 18:
            mensagem = "Menor de Idade";
            break;
        case idade <= 65:
            mensagem = "Adulto";
        default:
            mensagem = "Idoso";
    }

    return <p>{mensagem}</p>

} export default Idade