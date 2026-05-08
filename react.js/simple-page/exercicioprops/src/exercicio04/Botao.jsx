import "./botao.css";

function Botao({ texto, cor }) {

    return (
        <button style={{ backgroundColor: cor }}>
            {texto}
        </button>
    );
}

export default Botao;