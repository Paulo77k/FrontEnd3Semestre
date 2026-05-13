import { useState } from "react";

function CardFruta() {

    const [fruta, setFrutas] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Morango", quantidade: 20 },
    ]);

    function cadastrar(e) {

        e.preventDefault();

        setArrFrutas([
            ...arrFrutas,
            {
                id: Date.now(),
                nome: fruta,
                quantidade: quantidade
            }
        ]);

        setFrutas("");
        setQuantidade("");
    }

    return (
        <section className="sessao-cadastro">

            <h2>Cadastro</h2>

            <form action="" onSubmit={cadastrar}>

                <fieldset className="cadastro">

                    <label htmlFor="fruta" className="cadastro_rotulo">
                        Digite o nome da fruta
                    </label>

                    <input
                        type="text"
                        id="fruta"
                        placeholder="ex: limão"
                        className="cadastro_entrada"
                        value={fruta}
                        onChange={(e) => {
                            setFrutas(e.target.value);
                        }}
                    />

                    <br /><br />

                    <label htmlFor="quantidade" className="cadastro_rotulo">
                        Digite a quantidade
                    </label>

                    <input
                        type="number"
                        id="quantidade"
                        placeholder="ex: 10"
                        className="cadastro_entrada"
                        value={quantidade}
                        onChange={(e) => {
                            setQuantidade(e.target.value);
                        }}
                    />

                </fieldset>

                <button
                    type="submit"
                    className="cadastro_btncadastrar"
                >
                    Cadastrar
                </button>

            </form>

            <div className="resultados">

                <ul>
                    {
                        arrFrutas.map((f) => {
                            return (
                                <li key={f.id}>
                                    {f.nome} - Quantidade: {f.quantidade}
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        </section>
    );
}

export default CardFruta;