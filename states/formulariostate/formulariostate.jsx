import { useState } from "react";

function Formulariostate() {

    const [nome, setNome] = useState("Sem texto");
    const [sobrenome, setSobrenome] = useState("Sem sobrenome");

    return (
        <div>
            <h2>Formulario com state</h2>

            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(evento) => {
                    setNome(evento.target.value);
                }}
            />

            <br /><br />

            <label htmlFor="sobrenome">Sobrenome</label>
            <input
                type="text"
                placeholder="Digite seu sobrenome"
                onChange={(evento) => {
                    setSobrenome(evento.target.value);
                }}
            />

            <br /><br />

            <label>
                
                <strong> {nome} {sobrenome}</strong>
            </label>
        </div>
    );
}

export default Formulariostate;