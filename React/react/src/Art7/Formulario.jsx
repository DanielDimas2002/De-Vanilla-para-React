import React, { useState } from "react";

function Formulario() {

    const [erro, setErro] = useState("");

    function lidarComEnvio(evento) {
        evento.preventDefault(); // impede o recarregamento
        const nome = evento.target.nome.value;
        const email = evento.target.email.value;

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            setErro("Por favor, insira um e-mail válido.");
            return;
        }

        setErro("");

        console.log("Nome digitado:", nome);
        console.log("E-mail", email);
    }

    return (
        <form onSubmit={lidarComEnvio}>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Digite seu nome" id="nome" name="nome" required />


            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" name="email" placeholder="Digite seu e-mail" required />

            {erro && <p style={{ color: "red" }}>{erro}</p>}

            <button type="submit">Enviar</button>
        </form>
    )

} export default Formulario