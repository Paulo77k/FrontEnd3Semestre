import { useState } from 'react'; // 1. Importa o useState para gerenciar o usuário
import './App.css';
import Rotas from './routes/routes';
// 2. Importa o seu contexto (verifique se o caminho da pasta está certinho)
import { UsuarioContext } from './components/Context/context'; 

function App() {
  // 3. Cria o estado do usuário aqui no topo do app
  const [usuario, setUsuario] = useState(null);

  return (
    // 4. Envolve as rotas com o Provider e passa o estado no 'value'
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      <Rotas />
    </UsuarioContext.Provider>
  );
}

export default App;