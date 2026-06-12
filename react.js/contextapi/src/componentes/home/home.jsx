import { useContext } from "react";
import {UsuarioContext} from "../../Context/Usuariocontext";

const Home = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <div>
            <h2>Pagina Home</h2>
            <p>Usuario: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
        </div>
    );
};

export default Home;