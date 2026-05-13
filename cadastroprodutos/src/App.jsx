
import './App.css'
import CadastroFrutaPage from './pages/cadastrofruta/cadastrofrutapage'
import CadastroProdutoPage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomospage from './pages/quemsomos/quemsomospage'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import header from './pages/header'

export default function App() {
  return (
    <BrowserRouter>
    <header />
      <Routes>
        <Route  element={<HomePage />} path="/" />
        <Route  element={<QuemSomospage />} path="/quemsomos" />
        <Route  element={<CadastroFrutaPage />} path="/cadastrofruta" />
        <Route  element={<CadastroProdutoPage />} path="/cadastroproduto" />
      </Routes>
    </BrowserRouter>
  )
}
    
      

   
  
