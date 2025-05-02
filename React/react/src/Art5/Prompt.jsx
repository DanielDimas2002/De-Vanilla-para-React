import React, { useEffect, useRef, useState } from "react";

function Prompt() {
  const executado = useRef(false);
  const [idade, setIdade] = useState(null); // 🧠 Aqui usamos o useState!

  // Prompt automático (executa só uma vez)
  useEffect(() => {
    if (!executado.current) {
      executado.current = true;
      const nome = prompt("Digite seu nome:");
      alert("Olá, " + nome + "!");
    }
  }, []);

  // Prompt via botão
  function PromptBotao() {
    const nome = prompt("Digite o seu nome:");
    alert("Olá, " + nome + "!");
  }

  // Perguntar idade e converter o tipo
  function IdadePrompt() {
    const resposta = prompt("Qual a sua idade?");
    const idadeConvertida = Number(resposta); // 🎯 Aqui fazemos a conversão
    setIdade(idadeConvertida); // ⬅️ Atualizamos o estado com a idade
  }

  return (
    <>
      <h2>Alerta automático do React</h2>

      <h2>Exemplo com botão</h2>
      <button onClick={PromptBotao}>Clique para ativar o prompt</button>

      <h2>Perguntar idade</h2>
      <button onClick={IdadePrompt}>Clique para informar sua idade</button>

      <h2>Idade mais 1</h2>
      {idade !== null && <p>Daqui a 1 ano você fará {idade + 1} anos!</p>}
    </>
  );
}

export default Prompt;
