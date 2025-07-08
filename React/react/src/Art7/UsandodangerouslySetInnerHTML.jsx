import React from "react";

function UsandodangerouslySetInnerHTML(){
    const html = "<strong>Olá, <em>Visitante</em>!</strong>";

    return(
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
    )
}

export default UsandodangerouslySetInnerHTML