import React, { useState } from "react";

function FormularioCompleto() {

  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Estados para armazenar mensagens de erro
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroIdade, setErroIdade] = useState("");

  function lidarComEnvio(evento) {
    evento.preventDefault(); // evita o recarregamento da página
    let formularioValido = true;

    // Validação do nome
    if (nome.trim() === "") {
      setErroNome("O nome é obrigatório.");
      formularioValido = false;
    } else {
      setErroNome("");
    }

    // Validação de e-mail com Regex
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      setErroEmail("Por favor, insira um e-mail válido.");
      formularioValido = false;
    } else {
      setErroEmail("");
    }

    // Validação da idade
    const idadeNumero = parseInt(idade);
    if (isNaN(idadeNumero) || idadeNumero <= 0) {
      setErroIdade("Informe uma idade válida (número positivo).");
      formularioValido = false;
    } else {
      setErroIdade("");
    }

    // Se tudo estiver válido, exibe no console
    if (formularioValido) {
      console.log("Nome:", nome);
      console.log("E-mail:", email);
      console.log("Idade:", idade);
      console.log("Mensagem:", mensagem);
      alert("Formulário enviado com sucesso!");
    }
  }

  return (
    <form onSubmit={lidarComEnvio}>
      <h1>Formulário Completo</h1>

      {/* Campo Nome */}
      <label htmlFor="nome">Nome completo:</label>
      <input
        type="text"
        id="nome"
        placeholder="Digite seu nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      {erroNome && <p style={{ color: "red" }}>{erroNome}</p>}

      {/* Campo E-mail */}
      <label htmlFor="email">E-mail:</label>
      <input
        type="text"
        id="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {erroEmail && <p style={{ color: "red" }}>{erroEmail}</p>}

      {/* Campo Idade */}
      <label htmlFor="idade">Idade:</label>
      <input
        type="number"
        id="idade"
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      {erroIdade && <p style={{ color: "red" }}>{erroIdade}</p>}

      {/* Campo Mensagem */}
      <label htmlFor="mensagem">Mensagem (opcional):</label>
      <textarea
        id="mensagem"
        maxLength="300"
        placeholder="Digite sua mensagem (máx. 300 caracteres)"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <p>{mensagem.length}/300 caracteres</p>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCompleto;
