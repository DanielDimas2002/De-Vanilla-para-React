import React, { useState } from "react";

function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [erros, setErros] = useState({});
    const [sucesso, setSucesso] = useState(false);

    function validar() {
        const novosErros = {};
        const emailValido = email.includes("@") && email.includes(".");
        const idadeValida = !isNaN(idade) && Number(idade) > 0;

        if (!emailValido) {
            novosErros.email = "E-mail inválido";
        }

        if (!idadeValida) {
            novosErros.idade = "Idade inválida";
        }

        setErros(novosErros);

        return Object.keys(novosErros).length === 0;
    }

    function lidarComEnvio(evento) {
        evento.preventDefault();

        if (validar()) {
            console.log("Nome:", nome);
            console.log("Email:", email);
            console.log("Idade:", idade);
            setSucesso(true);
        } else {
            setSucesso(false);
        }
    }

    return (
        <form onSubmit={lidarComEnvio}>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className={sucesso ? "campo-valido" : ""}
            />

            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={erros.email ? "campo-invalido" : "campo-valido"}
                required
            />
            {erros.email && <p style={{ color: "red" }}>{erros.email}</p>}

            <label htmlFor="idade">Idade</label>
            <input
                type="number"
                id="idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                className={erros.idade ? "campo-invalido" : "campo-valido"}
                required
            />
            {erros.idade && <p style={{ color: "red" }}>{erros.idade}</p>}

            <button type="submit">Enviar</button>

            {sucesso && <p style={{ color: "green" }}>Formulário enviado com sucesso!</p>}
        </form>
    );
}

export default Formulario;
