import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {UsuarioContext} from "../../Context/Usuariocontext";
const Header = () => { 
    const {usuario, setUsuario}  = useContext(UsuarioContext);
    const [novoUsuario, setNovoUsuario] = useState('');
    return (
        <header>
            <h1>My App</h1>
            <nav>
                <Link to={"/"}>Home</Link>{"  "}
                <Link to={"/perfil"}>Perfil</Link>{"  "}
                <Link to={"/my-blog"}>My blog</Link>{"  "}
                <Link to={"/cdProduto"}>Cadastro de Produto</Link>
                   <button
                    onClick={() => {
                         setUsuario(null);
                         setNovoUsuario("")


                    } }
                    
                    >
                    Sair

                    </button>
                
            </nav>
          
        </header>
    );
};

export default Header;