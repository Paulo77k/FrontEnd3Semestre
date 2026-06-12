import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" type={props.type} onClick={(e) => props.onClick(e)}>{props.nomeDoBotao}</button>

    )
}

export default Botao;