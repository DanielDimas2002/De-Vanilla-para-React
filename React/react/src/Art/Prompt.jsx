import React, { useEffect, useRef } from "react";

function Prompt() {
  const executado = useRef(false);

  useEffect(() => {
    if (!executado.current) {
      executado.current = true;
      const nome = prompt("Digite seu nome:");
      alert("Olá, " + nome + "!");
    }
  }, []);

  //Exemplo de prompt com botão

  function PromptBotao() {
    const nome = prompt("Digite o seu nome:");
    alert("Olá, " + nome + "!");
  }

  return (
    <>
      <h2>Alerta automático do React</h2>
      <h2>Exemplo com botão</h2>
      <button onClick={PromptBotao}>Clique para ativar o prompt</button>
    </>
  );
}

export default Prompt;
