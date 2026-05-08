import "./filme.css";

function Filme({ titulo, ano, genero, nota }) {

    return (
        <h1>
            Título:{titulo} Ano:{ano} Gênero:{genero} Nota:{nota}
        </h1>
    );
}

export default Filme;