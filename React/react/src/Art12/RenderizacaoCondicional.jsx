import React, { useState } from "react";

function UsuarioLogado(){
        return <p>Usuário autenticado ✅</p>
    }

    function UsuarioDeslogado(){
        return <p>Visitante, faça login ❌</p>
    }


function RenderizacaoCondicional() {

    {/*const logado = true; // altere para false e teste

    return(
        <div>
            {logado ? <p>Bem-Vindo de Volta!</p> : <p>Por favor, faça login.</p>}
        </div>
    )*/}

    {/*const notifificacoes = 3;

    return (
        <div>
            <h2>Painel</h2>
            {notifificacoes > 0 && <p>Você tem {notifificacoes} novas notifificações.</p>}
        </div>
    )*/}


    const [logado, setLogado] = useState(false)

    return(
        <div>
            {logado ? <UsuarioLogado/> : <UsuarioDeslogado/>}
            <button onClick={() => setLogado(!logado)}>
                {logado ? "Sair" : "Entrar"}
            </button>
        </div>
    )
    


} export default RenderizacaoCondicional