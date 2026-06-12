import { useContext, useState } from "react";
import {UsuarioContext} from "../../Context/Usuariocontext";

const Perfil = () =>{
    const {usuario, setUsuario}  = useContext(UsuarioContext);
    const [novoUsuario, setNovoUsuario] = useState('');
    const [email, setEmail] = useState('');
    const login = (dadosUsuario) => {
        localStorage.setItem("usuario", JSON.stringify(email));
         setEmail("");
     
    }
    return(
        <div>
            <h2>Perfil do Usuário</h2>
            <span>
                Usuario: {usuario}
            </span>
            <span>
                Email: {usuario}
            </span>
            <p>
                <input type="text" placeholder="Novo usuario" value={novoUsuario}
               
                 onChange={(e) => setNovoUsuario(e.target.value)} />
                <button onClick={
                    () => {
                         // quero alterar o usuario
                       

                    }
                    
                    }   >Alterar usuario</button>

                    <button
                    onClick={() => {
                       
                       
                    login()
                            
                    } }
                    
                    >
                      Entrar

                    </button>
                
                </p>
        </div>
    )
}
export default Perfil;