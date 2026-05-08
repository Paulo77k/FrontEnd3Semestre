import "./aluno.css";

function Aluno({ nome, curso, imagem }) {

    return (
        <div>
            <img src={imagem} alt={nome} />

            <h1>Nome:{nome}</h1>

            <h2>Curso:{curso}</h2>
        </div>
    );
}

export default Aluno;