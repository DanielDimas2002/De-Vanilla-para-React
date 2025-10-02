import React from "react";

function Saudacao() {

    const agora = new Date();
    const hora = agora.getHours();
    let mensagem = "";

    if (hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora < 18) {
        mensagem = "boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }

    return <p>{mensagem}</p>;

} export default Saudacao