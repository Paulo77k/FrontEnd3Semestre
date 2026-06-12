import { useContext } from "react";
import {UsuarioContext} from "../../Context/Usuariocontext";

const MyPage = () =>{
    const usuario = useContext(UsuarioContext);
   return(
      <div>
         <h2>Minha Página</h2>
         <p>Dados do usuario: {usuario.nome} - {usuario.email}</p>
      </div>
   )
}
export default MyPage;