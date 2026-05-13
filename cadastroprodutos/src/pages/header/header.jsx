import "./header.css"
export default function header(){
    return(

        <nav className="navbar">
            <link to="/">Home</link>
            <link to="/quemsomos">Quem Somos</link>
            <link to="/cadastrofruta">Cadastro Fruta</link>
            <link to="/cadastroproduto">Cadastro Produto</link>

   
        </nav>
    )
}